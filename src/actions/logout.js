import { server } from '../bff';
import { ACTION_TYPE } from './action-type';

/** creates a command to log out a user
 * @param {string} session - session hash
 * @returns {Object}
 */
export const logout = (session) => {
	server.logout(session);
	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
