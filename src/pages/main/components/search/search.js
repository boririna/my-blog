import styled from 'styled-components';
import { Icon, Input } from '../../../../components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				value={searchPhrase}
				onChange={onChange}
				placeholder="Поиск по заголовку..."
			/>
			<Icon inactive={true} id="fa-search" size="21px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	margin: 40px auto 0;
	width: 360px;
	height: 40px;
	position: relative;

	& > input {
		padding: 10px 40px 10px 10px;
	}

	& > div {
		position: absolute;
		right: 10px;
		top: 5px;
	}
`;
