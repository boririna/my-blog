import { transformPost } from '../transformers';

export const getPosts = () =>
	fetch('http://localhost:3005/posts')
		.then((loadedPosts) => loadedPosts.json())
		.then((loadedPosts) => {
			console.log('posts in getPosts', loadedPosts);
			return loadedPosts && loadedPosts.map(transformPost);
		});
