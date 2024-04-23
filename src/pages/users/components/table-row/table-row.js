import styled from 'styled-components';

const TableRowContainer = ({ children, className }) => (
	<div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContainer)`
	display: flex;
	border: ${({ border }) => (border ? '1px solid #000' : 'none')};

	padding: 3px;
	border-radius: 3px;

	& > div {
		display: flex;
		padding: 0 10px;
	}

	& .login-column {
		width: 170px;
	}

	& .registered-at-column {
		width: 200px;
	}

	& .role-column {
		width: auto;
	}
`;
