"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentType = exports.CommentEvent = exports.CommentReferenceType = void 0;
var CommentEvent;
(function (CommentEvent) {
    CommentEvent["REVIEW_CREATE"] = "comment.created";
})(CommentEvent || (exports.CommentEvent = CommentEvent = {}));
var CommentReferenceType;
(function (CommentReferenceType) {
    CommentReferenceType["STEROID"] = "Steroid";
    CommentReferenceType["SOURCE"] = "Source";
    CommentReferenceType["POST"] = "Post";
})(CommentReferenceType || (exports.CommentReferenceType = CommentReferenceType = {}));
var CommentType;
(function (CommentType) {
    CommentType["COMMENT"] = "Comment";
    CommentType["REVIEW"] = "Review";
    CommentType["POST"] = "Post";
})(CommentType || (exports.CommentType = CommentType = {}));
//# sourceMappingURL=comment-types.js.map