import { Icon } from '../../../../components';
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => {
						navigate('/');
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="published-at">
				<Icon
					inactive={true}
					id="fa-calendar-o"
					size="18px"
					margin="0 10px 0 0"
					cursor="initial"
				/>
				<p>{publishedAt}</p>
			</div>
			<div className="buttons">
				{editButton}
				<Icon
					id="fa-trash-o"
					size="20px"
					margin="0 0 0 10px"
					onClick={() => onPostRemove(id)}
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
