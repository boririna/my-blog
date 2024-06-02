import { addPost, updatePost } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const savePost = async (hash, newPostData) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	let savedPost = {};

	if (newPostData.id === '') {
		savedPost = await addPost(newPostData);
	} else {
		savedPost = await updatePost(newPostData);
	}

	return {
		error: null,
		res: savedPost,
	};
};
