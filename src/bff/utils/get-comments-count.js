// получение количества комментариев для поста с айди postId
export const getCommentsCount = (comments = [], postId) => {
	const postComments = comments.filter(
		({ postId: commentPostId }) => commentPostId === postId,
	);
	return postComments.length;
};
