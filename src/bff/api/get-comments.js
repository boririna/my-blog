// @ts-check
import { transformComment } from '../transformers';

/**
 *
 * @param {string} postId
 * @returns {Promise}
 */
export const getComments = (postId) =>
	fetch(`http://localhost:3005/comments?post_id=${postId}`)
		.then((loadedComments) => loadedComments.json())
		.then((loadedComments) => loadedComments.map(transformComment));
