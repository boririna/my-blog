import { H2 } from '../h2/h2';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// shows error when there is no access to data due to a specific role
export const Error = ({ error }) => {
	return (
		error && (
			<Div>
				<H2>Ошибка</H2>
				<div>{error}</div>
			</Div>
		)
	);
};
