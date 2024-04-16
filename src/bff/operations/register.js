import { addUser, getUser } from '../api';
import { sessions } from '../sessions';
import { typedefs } from '../../typedefs';

/** register
 * @param {string} regLogin - login
 * @param {string} regPassword - password
 * @returns {EndpointReturn}
 */
export const register = async (regLogin, regPassword) => {
	const existingUser = await getUser(regLogin);

	if (existingUser) {
		return {
			error: 'Такой логин уже занят',
			res: null,
		};
	}

	const user = await addUser(regLogin, regPassword);

	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			roleId: user.role_id,
			session: sessions.create(user),
		},
	};
};
