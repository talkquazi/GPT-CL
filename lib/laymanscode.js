const { Configuration, OpenAIApi } = require("openai");
const config = require('../config/config.js');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const retry = (fn, retries = config.OPEN_API_RETRIES, retryDelay = config.OPEN_API_RETRY_DELAY) => {
  return new Promise(async (resolve, reject) => {
    await fn()
      .then(resolve)
      .catch(error => {
        if (retries === 1) reject(error);
        else {
          setTimeout(async () => {
            console.log('Error: Retries Left', retries - 1);
            resolve(await retry(fn, retries - 1, retryDelay).then(resolve, reject));
          }, retryDelay);
        }
      });
  });
};

const createCompletion = async (prompt) => {
        return await retry(async () => {
            try {
                console.log('Generating Code From Input Code Length:', prompt.length);
                console.log(prompt);
                const completion = await openai.createCompletion({
                    model: "text-davinci-003",
                    max_tokens: 400,
                    temperature: 0,
                    prompt: prompt,
                });
                console.log('Completion Status:', completion.status);
                if (completion.status !== 200) {
                    throw new Error('Non-200 status code returned');
                }
                console.log('completion result:', completion.data.choices);
                if (completion && completion.data && completion.data.choices && completion.data.choices[0] && completion.data.choices[0]['finish_reason'] === 'length') {
                    console.log('WARNING!: Completion did not finish due to token length limit. Try increasing the token usage.');
                }
                console.log('Tokens Used:', completion.data.usage['total_tokens']);
                global.tokensUsed += parseInt(completion.data.usage['total_tokens']);
                return completion.data.choices[0].text;
            } catch (err) {
                console.log('Create Completion Error:', err);
            }
        });
    }

module.exports = {
    createCompletion
};
