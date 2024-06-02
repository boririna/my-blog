// @ts-check
import { deleteComment, deletePost, getComments, getPost } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

/**
 * Adds a comment to a post and returns the updated post with comments.
 * @param {number} hash
 * @param {string} id
 * @returns
 */
export const removePost = async (hash, id) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await deletePost(id);

	const comments = await getComments(id);

	await Promise.all(
		comments.map(({ id: commentId }) => {
			return deleteComment(commentId);
		}),
	);

	return {
		error: null,
		res: true,
	};
};
