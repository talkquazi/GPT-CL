const path = require('path');
const fs = require('fs');
const flourite = require('flourite');
const mime = require('mime-types');

const getFileExtension = async (mimeType) => {
    const extension = mime.extension(mimeType);
    return extension;
}

const getMimeType = async (filePath) => {
	return new Promise(async (resolve, reject) => {
		try {
		    const data = fs.readFileSync(filePath, 'utf8');
		    const languageData = flourite(data);
		    const language = languageData.language;
		    console.log(`The detected language for ${filePath} is : ${language}`);

	        let mimeType = 'text/plain';
	        switch (language) {
		        case 'JSON':
		            mimeType = 'application/json';
		            break;
		        case 'Javascript':
		            mimeType = 'application/javascript';
		            break;
		        case 'Python':
		            mimeType = 'application/python';
		            break;
		        case 'C':
		        case 'C++':
		            mimeType = 'text/x-c';
		            break;
		        case 'C#':
		            mimeType = 'text/x-csharp';
		            break;
		        case 'Clojure':
		            mimeType = 'text/x-clojure';
		            break;
		        case 'CSS':
		        	mimeType = 'text/css';
		        	break;
		        case 'Dockerfile':
		        	mimeType = 'text/x-dockerfile';
		        	break;
		     	case 'Elixir':
			        mimeType = 'text/x-elixir';
		    	    break;
			    case 'Go':
			        mimeType = 'text/x-go';
		    	    break;
		    	case 'HTML':
		        	mimeType = 'text/html';
		        	break;
		    	case 'Java':
		        	mimeType = 'text/x-java';
		        	break;
		    	case 'Julia':
		        	mimeType = 'text/x-julia';
		        	break;
		    	case 'Kotlin':
		        	mimeType = 'text/x-kotlin';
		        	break;
		    	case 'Lua':
		        	mimeType = 'text/x-lua';
		        	break;
		    	case 'Markdown':
		        	mimeType = 'text/x-markdown';
		        	break;
		        case 'Pascal':
		        	mimeType = 'text/x-pascal';
		        	break;
		    	case 'PHP':
		        	mimeType = 'text/x-php';
		        	break;
			    case 'Python':
			        mimeType = 'application/python';
			        break;
			    case 'Ruby':
			        mimeType = 'text/x-ruby';
			        break;
			    case 'Rust':
			        mimeType = 'text/x-rustsrc';
			        break;
			    case 'SQL':
			        mimeType = 'text/x-sql';
			        break;
			    case 'YAML':
			        mimeType = 'text/x-yaml';
			        break;
			}

			const fileExtension = await getFileExtension(mimeType);

			console.log(`The MIME type for ${language} is : ${mimeType}`);
			console.log(`The File extension for ${mimeType} is : ${fileExtension}`)

			return resolve({
				mime: mimeType,
				ext: fileExtension
			});
		} catch (err) {
			console.log('File Rename Mime Type Failure:', err);
			reject(err);
		}
	});
}

const renameFileExtension = async (filePath, newExtension) => {
	return new Promise(async (resolve, reject) => {
		try {
			console.log('new extension:', filePath, newExtension);
		    const dir = path.dirname(filePath);
		    const ext = path.extname(filePath);
		    const base = path.basename(filePath, ext);
		    const newFilePath = path.format({
		        dir: dir,
		        name: base,
		        ext: newExtension
		    });
		    fs.renameSync(filePath, newFilePath);
		    return resolve(true);	
		} catch (e) {
			console.log('Error Renaming Generated File:', e);
			return reject(false);
		}
	});
}

module.exports = {
	renameFileExtension,
	getMimeType,
	getFileExtension
}
