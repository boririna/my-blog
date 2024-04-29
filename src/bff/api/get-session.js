import { transformSession } from '../transformers';

export const getSession = async (hash) =>
	fetch(`http://localhost:3005/sessions?hash=${hash}`)
		.then((loadedSession) => loadedSession.json())
		.then(([loadedSession]) => {
			console.log('loadedSession1', loadedSession);
			loadedSession && transformSession(loadedSession);
			console.log('loadedSession2', loadedSession);
		});
