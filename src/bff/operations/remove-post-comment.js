// @ts-check
import { deleteComment, getPost } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';
import { getPostCommentsWithAuthor } from '../utils';

/**
 * Adds a comment to a post and returns the updated post with comments.
 * @param {number} hash
 * @param {string} postId
 * @param {string} id
 * @returns
 */
export const removePostComment = async (hash, postId, id) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await deleteComment(id);

	const post = await getPost(postId);

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
