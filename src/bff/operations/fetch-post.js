import { getPost, getUsers } from '../api';
import { getComments } from '../api/get-comments';

/**
 * Fetches a post and its associated comments with author information.
 *
 * @param {string} postId - The unique identifier of the post to fetch.
 * @returns {Promise<{ error: null | Error, res: PostWithComments }>} - A promise resolving to an object with error and response data.
 */

export const fetchPost = async (postId) => {
	const post = await getPost(postId);

	const comments = await getComments(postId);

	const users = await getUsers();

	const commentsWithAuthor = comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);

		return {
			...comment,
			author: user?.login,
		};
	});

	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor,
		},
	};
};
