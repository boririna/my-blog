import { Icon } from '../../../icon/icon';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	font-size: 18px;
	width: 100px;
	height: 32px;
	border: 1px solid #000;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #eee;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to="/login">Войти</StyledLink>
			</RightAligned>
			<RightAligned>
				<Link onClick={() => navigate(-1)}>
					<Icon id="fa-arrow-left" size="18px" margin="10px 20px 0 0" />
				</Link>
				<Link to="/post">
					<Icon id="fa-file-text-o" size="18px" margin="10px 20px 0 0" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" size="18px" margin="10px 0 0 0" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
