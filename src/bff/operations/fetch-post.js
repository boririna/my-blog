import { getPost } from '../api';
import { getPostCommentsWithAuthor } from '../utils';

/**
 * Fetches a post and its associated comments with author information.
 *
 * @param {string} postId - The unique identifier of the post to fetch.
 * @returns {Promise<{ error: null | Error, res: PostWithComments }>} - A promise resolving to an object with error and response data.
 */

export const fetchPost = async (postId) => {
	let post;
	let error;

	try {
		post = await getPost(postId);
	} catch (postError) {
		error = postError;
	}

	if (error) {
		return {
			error: error,
			res: null,
		};
	}

	// утилита для получения комментариев с автором, чтобы не дублировать код
	const commentsWithAuthor = await getPostCommentsWithAuthor(postId);

	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor,
		},
	};
};
