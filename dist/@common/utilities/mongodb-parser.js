"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = void 0;
function getUniqueErrorMessage(err) {
    let output;
    try {
        let begin = 0;
        if (err.errMsg.lastIndexOf('.$') !== -1) {
            begin = err.errMsg.lastIndexOf('.$') + 2;
        }
        else {
            begin = err.errMsg.lastIndexOf('index: ') + 7;
        }
        const fieldName = err.errMsg.substring(begin, err.errMsg.lastIndexOf('_1'));
        output =
            fieldName.charAt(0).toUpperCase() +
                fieldName.slice(1) +
                ' already exists';
    }
    catch (ex) {
        output = 'Unique field already exists';
    }
    return output;
}
function getErrorMessage(err) {
    let message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = getUniqueErrorMessage(err);
                break;
            case 'UNSUPPORTED_MEDIA_TYPE':
                message = 'Unsupported filetype';
                break;
            case 'LIMIT_FILE_SIZE':
                message = 'Image file too large. Maximum size allowed is 2Mb files.';
                break;
            case 'LIMIT_UNEXPECTED_FILE':
                message = 'Missing `newProfilePicture` field';
                break;
            default:
                message = 'Something went wrong';
        }
    }
    else if (err.message && !err.errors) {
        message = err.message;
    }
    else {
        for (const errName in err.errors) {
            if (err.errors[errName].message) {
                message = err.errors[errName].message;
            }
        }
    }
    return message;
}
exports.getErrorMessage = getErrorMessage;
//# sourceMappingURL=mongodb-parser.js.map