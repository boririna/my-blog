import { getPosts, getComments } from '../api';
import { getCommentsCount } from '../utils';

export const fetchPosts = async (page, limit) => {
	const [{ posts, links }, comments] = await Promise.all([
		getPosts(page, limit),
		getComments(),
	]);
	// const posts = await getPosts(page, limit);
	// const comments = await getComments();

	return {
		error: null,
		res: {
			posts: posts.map((post) => ({
				...post,
				commentsCount: getCommentsCount(comments, post.id),
			})),
			links: links,
		},
	};
};
