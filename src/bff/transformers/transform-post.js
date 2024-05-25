// @ts-check

import { PostInfo } from '../../classes/post_info';

/**
 *
 * @param {*} dbPost post from the database
 * @returns {PostInfo}
 */
export const transformPost = function (dbPost) {
	const ret = new PostInfo(
		false,
		dbPost.id,
		dbPost.title,
		dbPost.img_url,
		dbPost.content,
		dbPost.published_at,
	);
	return ret;
};
