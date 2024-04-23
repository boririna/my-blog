import { transformPost } from '../transformers';

// transfromPost transforms data from server to needed object form
export const getPost = async (postId) =>
	fetch(`http://localhost:3005/posts/${postId}`)
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
