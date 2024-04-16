import { transformUser } from '../transformers';

// transfromUser transforms data from server to needed object form
export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3005/users?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(([loadedUser]) => loadedUser && transformUser(loadedUser));
