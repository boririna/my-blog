import { getPosts, getComments } from '../api';
import { getCommentsCount } from '../utils';

export const fetchPosts = async (page, limit) => {
	const [posts, comments] = await Promise.all([getPosts(page, limit), getComments()]);
	// const posts = await getPosts(page, limit);
	// const comments = await getComments();

	return {
		error: null,
		res: posts.map((post) => ({
			...post,
			commentsCount: getCommentsCount(comments, post.id),
		})),
	};
};
