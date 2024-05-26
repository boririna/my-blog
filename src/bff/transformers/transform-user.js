export const transformUser = (dbUser) => ({
	id: dbUser.id,
	login: dbUser.login,
	password: dbUser.password,
	registeredAt: dbUser.registered_at,
	roleId: dbUser.role_id,
});

// import { UserInfo } from '../../classes/user-info';

// export const transformUser = function (dbUser) {
// 	const ret = new UserInfo(
// 		false,
// 		dbUser.id,
// 		dbUser.login,
// 		dbUser.roleId,
// 		dbUser.session,
// 	);
// 	return ret;
// };
