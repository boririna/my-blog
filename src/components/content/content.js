import { Error } from '../error/error';

// shows error when there is no access to data due to a specific role
export const Content = ({ children, error }) => {
	return error ? <Error error={error} /> : children;
};
