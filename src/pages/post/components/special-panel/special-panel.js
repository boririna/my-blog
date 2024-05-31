import styled from 'styled-components';
import { Icon } from '../../../../components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon
					id="fa-calendar-o"
					size="18px"
					margin="0 10px 0 0"
					cursor="initial"
					onClick={() => {}}
				/>
				<p>{publishedAt}</p>
			</div>
			<div className="buttons">
				{editButton}
				{/* <Icon id="fa-floppy-o" size="21px" margin="0 0 0 0" onClick={() => {}} /> */}
				<Icon
					id="fa-trash-o"
					size="20px"
					margin="0 0 0 10px"
					onClick={() => {}}
				/>
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	margin: ${({ margin }) => margin};
	font-size: 18px;
	display: flex;
	justify-content: space-between;

	& i {
	}

	& .buttons {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
`;
