import { Icon } from '../../../icon/icon';
import { Link, useNavigate } from 'react-router-dom';
import { ROLE } from '../../../../constants';
import { Button } from '../../../button/button';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUserLogin,
	selectUserRole,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../actions';

const RightAlignedUp = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: start;
	height: 35px;
`;

const RightAlignedDown = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: end;
	height: 35px;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const dispatch = useDispatch();
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAlignedUp>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<Icon
							id="fa-sign-out"
							size="18px"
							margin="0 0 0 10px"
							onClick={() => dispatch(logout(session))}
						/>
					</>
				)}
			</RightAlignedUp>
			<RightAlignedDown align-items="end">
				<Link onClick={() => navigate(-1)}>
					<Icon id="fa-arrow-left" size="18px" margin="10px 20px 0 0" />
				</Link>
				<Link to="/post">
					<Icon id="fa-file-text-o" size="18px" margin="10px 20px 0 0" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" size="18px" margin="10px 0 0 0" />
				</Link>
			</RightAlignedDown>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
