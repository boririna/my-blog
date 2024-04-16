import { sessions } from '../sessions';

export const logout = async (useSession) => {
	sessions.remove(useSession);
};
