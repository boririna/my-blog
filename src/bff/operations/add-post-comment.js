// @ts-check
import { PostInfo } from '../../classes/post_info';
import { addComment, getPost } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';
import { getPostCommentsWithAuthor } from '../utils';

/**
 * Adds a comment to a post and returns the updated post with comments.
 * @param {number} hash
 * @param {string} userId
 * @param {string} postId
 * @param {string} content
 * @returns
 */
export const addPostComment = async (hash, userId, postId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await addComment(userId, postId, content);

	/** @type {PostInfo} */
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
