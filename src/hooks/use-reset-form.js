import { useStore } from 'react-redux';
import { useEffect } from 'react';

export const useResetForm = (reset) => {
	const store = useStore();

	useEffect(() => {
		// @ts-ignore
		let currentWasLogout = store.getState().app.wasLogout;
		return store.subscribe(() => {
			let prevWasLogout = currentWasLogout;
			// @ts-ignore
			currentWasLogout = store.getState().app.wasLogout;
			if (currentWasLogout !== prevWasLogout) {
				reset();
			}
		});
	}, [reset, store]);
};
