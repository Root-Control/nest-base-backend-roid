declare enum CommentEvent {
    REVIEW_CREATE = "comment.created"
}
declare enum CommentReferenceType {
    STEROID = "Steroid",
    SOURCE = "Source",
    POST = "Post"
}
declare enum CommentType {
    COMMENT = "Comment",
    REVIEW = "Review",
    POST = "Post"
}
export { CommentReferenceType, CommentEvent, CommentType };
