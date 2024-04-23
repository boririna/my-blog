// @ts-check
import { getUser } from '../api';
import { sessions } from '../sessions';
import { typedefs } from '../../typedefs';

/** authorize
 * @param {string} authLogin - login
 * @param {string} authPassword - password
 * @returns
 */
export const authorize = async (authLogin, authPassword) => {
	const user = await getUser(authLogin);

	if (!user) {
		return {
			error: 'Такой пользователь не найден',
			res: null,
		};
	}

	const { id, login, roleId } = user;

	if (authPassword !== user.password) {
		return {
			error: 'Неверный пароль',
			res: null,
		};
	}

	return {
		error: null,
		res: {
			id,
			login,
			roleId,
			session: sessions.create(user),
		},
	};
};
