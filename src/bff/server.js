import {
	authorize,
	fetchRoles,
	fetchUsers,
	logout,
	register,
	updateUserRole,
	removeUser,
} from './operations';

/** mapping: keys: string operation, values - handler function */
export const server = {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
};
