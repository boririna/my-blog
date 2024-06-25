import { setPostData } from './set-post-data';
import { ACTION_TYPE } from './action-type';

describe('setPostData', () => {
	it('should create an action to set post data', () => {
		const mockPostData = { id: 1, title: 'Test Post' };
		const expectedAction = {
			type: ACTION_TYPE.SET_POST_DATA,
			payload: mockPostData,
		};

		const action = setPostData(mockPostData);

		expect(action).toEqual(expectedAction);
	});
});
