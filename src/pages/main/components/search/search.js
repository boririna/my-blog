import styled from 'styled-components';
import { Icon, Input } from '../../../../components';

const SearchContainer = ({ className }) => {
	return (
		<div className={className}>
			<Input />
			<Icon inactive={true} id="fa-search" margin="0 7px 0 0" size="18px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	margin: 40px auto 0;
	width: 340px;
	height: 40px;
	position: relative;

	& > div {
		position: absolute;
		right: 5px;
	}
`;
