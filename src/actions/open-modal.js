// @ts-check
import { ACTION_TYPE } from './action-type';

// Returns object

export const openModal = (modalParams) => ({
	type: ACTION_TYPE.OPEN_MODAL,
	payload: modalParams,
});
