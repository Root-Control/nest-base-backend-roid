enum CommentEvent {
  REVIEW_CREATE = 'comment.created',
}

enum CommentReferenceType {
  STEROID = 'Steroid',
  SOURCE = 'Source',
  POST = 'Post',
}

enum CommentType {
  COMMENT = 'Comment',
  REVIEW = 'Review',
  POST = 'Post',
}

export { CommentReferenceType, CommentEvent, CommentType };
