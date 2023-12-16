"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateScore = exports.getString = exports.getVariableName = exports.validateHash = exports.generateHash = void 0;
const bcrypt = require("bcrypt");
function generateHash(password) {
    return bcrypt.hashSync(password, 10);
}
exports.generateHash = generateHash;
function validateHash(password, hash) {
    if (!password || !hash) {
        return Promise.resolve(false);
    }
    return bcrypt.compare(password, hash);
}
exports.validateHash = validateHash;
function getVariableName(getVar) {
    const m = /\(\)=>(.*)/.exec(getVar.toString().replaceAll(/(\r\n|\n|\r|\s)/gm, ''));
    if (!m) {
        throw new Error("The function does not contain a statement matching 'return variableName;'");
    }
    const fullMemberName = m[1];
    const memberParts = fullMemberName.split('.');
    return memberParts.at(-1);
}
exports.getVariableName = getVariableName;
function getString(key) {
    return key.replaceAll('\\n', '\n');
}
exports.getString = getString;
function calculateScore(points) {
    if (!points || points.length === 0) {
        return 0;
    }
    const totalAverage = points.reduce((acc, point) => acc + point, 0) / points.length;
    return totalAverage * 20;
}
exports.calculateScore = calculateScore;
//# sourceMappingURL=utils.js.map