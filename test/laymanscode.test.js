const { createCompletion, createCompletionMock } = require('../lib/laymanscode.js');
const jest = require('jest');

describe('createCompletion', () => {
    it('returns the expected output when given a certain input', async () => {
        const prompt = 'example prompt';
        const expectedOutput = {
            status: 200,
            data: {
                choices: [
                    {
                        finish_reason: 'stop',
                        text: 'mocked completion'
                    }
                ],
                usage: {
                    total_tokens: 0
                }
            }
        };

        const output = await createCompletionMock(prompt);

        expect(output).toEqual(expectedOutput);
    });
});