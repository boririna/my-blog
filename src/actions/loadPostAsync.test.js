const { loadPostAsync } = require('./load-post-async');
const { setPostData } = require('./set-post-data');

jest.mock('./set-post-data'); // Mock the setPostData action

describe('loadPostAsync', () => {
	it('should dispatch setPostData action with post data on successful request', async () => {
		// Arrange
		const mockPostData = { res: { id: 1, title: 'Test Post' } };
		const requestServerFn = jest.fn().mockResolvedValue(mockPostData);
		const dispatchFn = jest.fn();

		// Act
		const thunk = loadPostAsync(requestServerFn, 1);
		await thunk(dispatchFn);

		// Assert
		expect(requestServerFn).toHaveBeenCalledWith('fetchPost', 1);
		expect(dispatchFn).toHaveBeenCalledWith(setPostData(mockPostData.res));
	});

	it('should handle error case gracefully', async () => {
		// Arrange
		const mockError = { error: 'Post not found' };
		const requestServerFn = jest.fn().mockResolvedValue(mockError);
		const dispatchFn = jest.fn();

		// Act
		const thunk = loadPostAsync(requestServerFn, 2);
		const result = await thunk(dispatchFn);

		// Assert
		expect(requestServerFn).toHaveBeenCalledWith('fetchPost', 2);
		expect(dispatchFn).not.toHaveBeenCalledWith(setPostData(expect.anything()));
		expect(result).toEqual(mockError);
	});
});
