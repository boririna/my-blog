// @ts-check

import { ROLE } from '../constants';

/**
 * Represents a user object.
 *
 * @constructor
 * @param {string} id - The unique identifier for the user.
 * @param {string} login - The login of the user.
 * @param {number} roleId - The role id of the user.
 * @param {string} session - The hash of user\s session.
 */
export class UserInfo {
	constructor(disableValidation, id, login, roleId, session) {
		if (!disableValidation) {
			if (typeof id !== 'string' || id.trim() === '') {
				throw new Error('id must be a positive number');
			}
			if (typeof login !== 'string' || login.trim() === '') {
				throw new Error('login must be a non-empty string');
			}
			if (typeof roleId !== 'number' || roleId === null) {
				throw new Error('login must be a non-empty string');
			}

			if (typeof session !== 'string' || session.trim() === '') {
				throw new Error('session must be a non-empty string');
			}
		}
		this.id = id;
		this.login = login;
		this.roleId = roleId;
		this.session = session;
	}
}

export const MakeEmptyUserInfo = function () {
	return new UserInfo(true, '', '', ROLE.GUEST, '');
};
