import { ACTION_TYPE } from '../actions';
import { MakeEmptyPostInfo, PostInfo } from '../classes/post_info';

/** @param {PostInfo} */
const initialPostState = MakeEmptyPostInfo();
// {
// 	id: '',
// 	title: '',
// 	imageUrl: '',
// 	content: '',
// 	publishedAt: '',
// 	comments: [],
// };

export const postReducer = (state = initialPostState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_POST_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
