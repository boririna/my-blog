import { checkAccess } from './check-access';
import { ROLE } from '../constants';

describe('checkAccess', () => {
	it('should return true if the user role is included in the access array', () => {
		const access = [ROLE.ADMIN, ROLE.MODERATOR];
		const userRole = ROLE.ADMIN;

		const result = checkAccess(access, userRole);

		expect(result).toBe(true);
	});

	it('should return false if the user role is not included in the access array', () => {
		const access = [ROLE.MODERATOR, ROLE.READER];
		const userRole = ROLE.ADMIN;

		const result = checkAccess(access, userRole);

		expect(result).toBe(false);
	});

	it('should handle empty access array', () => {
		const access = [];
		const userRole = ROLE.ADMIN;

		const result = checkAccess(access, userRole);

		expect(result).toBe(false);
	});
});
