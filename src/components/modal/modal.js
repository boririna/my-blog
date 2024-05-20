import { useSelector } from 'react-redux';
import { Button } from '../button/button';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../../selectors';
import styled from 'styled-components';

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(selectModalIsOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 20;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;

	& .overlay {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100%;
	}

	& .box {
		position: relative;
		z-index: 30;
		width: 300px;
		background-color: white;
		padding: 0 20px 20px;
		margin: auto;
		text-align: center;
	}

	& .buttons {
		display: flex;
		justify-content: space-between;
	}
`;
