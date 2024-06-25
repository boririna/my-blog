import { PostInfo } from '../../classes/post_info';
import { transformPost } from '../transformers';

// transfromPost transforms data from server to needed object form

/**
 * Fetches a post from the server and transforms it to the desired format.
 *
 * @param {string} postId - The unique identifier of the post to fetch.
 * @returns {Promise<PostInfo>} - A promise resolving to the transformed post object or null if there's an error.
 */
export const getPost = async (postId) =>
	fetch(`http://localhost:3005/posts/${postId}`)
		.then((res) => {
			if (res.ok) {
				return res;
			}

			const error =
				res.status === 404
					? 'Такая страница не существует'
					: 'Что-то пошло не так';

			return Promise.reject(error);
		})
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => {
			if (!loadedPost) {
				throw new Error('loadedPost empty');
			}
			// return loadedPost && transformPost(loadedPost);
			return transformPost(loadedPost);
		});
