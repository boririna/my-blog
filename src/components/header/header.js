import { ControlPanel } from './components/control-panel/control-panel';
import { Logo } from './components/logo/logo';
import styled from 'styled-components';

const Description = styled.div`
	display: flex;
	align-items: center;
	font-style: italic;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Description>
			Веб-технологии
			<br />
			Написание кода
			<br />
			Разбор ошибок
		</Description>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0px 0px 15px #a3a3a3;
	background-color: #fff;
`;
