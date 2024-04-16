import { useSelector } from 'react-redux';
import { server } from '../bff';
import { selectUserSession } from '../selectors';
import { typedefs } from '../typedefs';
import { useCallback } from 'react';

/**
 *
 * @param {string} operation
 * @param  {...any} params
 * @returns {EndpointReturn}
 */
export const useServerRequest = () => {
	const session = useSelector(selectUserSession);

	// useCallback makes this function with the same reference unless session: string value changes
	return useCallback(
		(operation, ...params) => {
			// if operation in ['register', 'authorize'] we don't send a session
			/** @type {string} - one of register, authorize */
			const request = ['register', 'authorize'].includes(operation)
				? params
				: [session, ...params];
			// server: object with functions like 'authorize', 'logout'
			// 'operation' is a key by which a function from object 'sever' is called, '...request' are parameters passed to this function

			let endpoint_function = server[operation];
			// operation_handler;
			/** @type {typedefs.EndpointReturn} */
			let ret = endpoint_function(...request);
			return ret;
		},
		[session],
	);
};
