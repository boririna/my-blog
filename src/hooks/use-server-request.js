import { useSelector } from 'react-redux';
import { server } from '../bff';
import { selectUserSession } from '../selectors';
import { useCallback } from 'react';

export const useServerRequest = () => {
	const session = useSelector(selectUserSession);

	// useCallback makes this function with the same reference unless session: string value changes, so it doesn't rerender unless session has changed
	return useCallback(
		/**
		 *
		 * @param {string} operation
		 * @param  {...any} params
		 * @returns {EndpointReturn}
		 */
		(operation, ...params) => {
			// if operation in ['register', 'authorize'] we don't send a session
			/** @type {Array} - one of register, authorize */
			const request = ['register', 'authorize', 'fetchPost'].includes(operation)
				? params
				: [session, ...params];
			// server: object with functions like 'authorize', 'logout'
			// 'operation' is a key by which a function from object 'sever' is called, '...request' are parameters passed to this function

			let endpoint_function = server[operation];
			// operation_handler;
			/** @type {EndpointReturn} */
			let ret = endpoint_function(...request);
			return ret;
		},
		[session],
	);
};
