import { transformPost } from '../transformers';

// transfromPost transforms data from server to needed object form

/**
 * Fetches a post from the server and transforms it to the desired format.
 *
 * @param {string} postId - The unique identifier of the post to fetch.
 * @returns {Promise<Post | null>} - A promise resolving to the transformed post object or null if there's an error.
 */
export const getPost = async (postId) =>
	fetch(`http://localhost:3005/posts/${postId}`)
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => {
			return loadedPost && transformPost(loadedPost);
		});
