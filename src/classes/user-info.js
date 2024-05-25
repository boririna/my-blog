// @ts-check

/**
 * Represents a post object.
 *
 * @constructor
 * @param {string} id - The unique identifier for the user.
 * @param {string} login - The login of the user.
 * @param {string} roleId - The role id of the user.
 * @param {string} session - The tex.
 * @param {string} publishedAt - The date and time the post was published.
 * @param {Array<string>} comments
 */
export class UserInfo {
	constructor(disableValidation, id, title, imageUrl, content, publishedAt, comments) {
		if (!disableValidation) {
			if (typeof id !== 'string' || id.trim() === '') {
				throw new Error('id must be a positive number');
			}
			if (typeof title !== 'string' || title.trim() === '') {
				throw new Error('title must be a non-empty string');
			}
			if (typeof imageUrl !== 'string' || imageUrl.trim() === '') {
				throw new Error('imageUrl must be a non-empty string');
			}
			if (!imageUrl.startsWith('https://')) {
				throw new Error('imageUrl is wrong: ' + imageUrl);
			}
			if (typeof content !== 'string' || content.trim() === '') {
				throw new Error('content must be a non-empty string');
			}
			if (typeof publishedAt !== 'string' || publishedAt.trim() === '') {
				throw new Error('content must be a non-empty string');
			}
		}
		this.id = id;
		this.title = title;
		this.imageUrl = imageUrl;
		this.content = content;
		this.publishedAt = publishedAt;
		this.comments = comments;
	}
}

export const MakeEmptyPostInfo = function () {
	return new PostInfo(true, '', '', '', '', '', []);
};
