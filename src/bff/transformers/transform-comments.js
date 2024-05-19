/**
 * Transforms a database comment object into a more readable format.
 *
 * @param {Object} dbComment - The comment object retrieved from the database.
 * @param {string} dbComment.id - The unique identifier of the comment.
 * @param {string} dbComment.post_id - The ID of the post the comment belongs to.
 * @param {string} dbComment.author_id - The ID of the user who wrote the comment.
 * @param {string} dbComment.content - The content of the comment.
 * @param {Date} dbComment.published_at - The date and time the comment was published.
 * @returns {Comment} - The transformed comment object.
 */
export const transformComment = (dbComment) => {
	return {
		id: dbComment.id,
		postId: dbComment.post_id,
		authorId: dbComment.author_id,
		content: dbComment.content,
		publishedAt: dbComment.published_at,
	};
};
