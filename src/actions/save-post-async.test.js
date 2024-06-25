import { savePostAsync } from './save-post-async';
import { setPostData } from './set-post-data'; // Assuming this is imported

// Mock requestServer function
const mockRequestServer = jest.fn();

describe('savePostAsync', () => {
	afterEach(() => {
		jest.clearAllMocks(); // Clear mock calls after each test
	});

	it('dispatches setPostData and returns updated post data', async () => {
		// Mock data
		const newPostData = { title: 'Test Post', content: 'This is a test post.' };
		const updatedPost = { res: { id: 1, ...newPostData } };

		// Mock requestServer to resolve with updatedPost
		mockRequestServer.mockResolvedValue(updatedPost);

		// Mock dispatch function
		const mockDispatch = jest.fn();

		// Call savePostAsync with mocked functions
		const savePostAction = savePostAsync(mockRequestServer, newPostData);
		await savePostAction(mockDispatch);

		// Assertions
		// Verify requestServer is called with expected arguments
		expect(mockRequestServer).toHaveBeenCalledWith('savePost', newPostData);

		// Verify dispatch is called with setPostData action and updated post data
		expect(mockDispatch).toHaveBeenCalledWith(setPostData(updatedPost.res));

		// Verify the return value of savePostAsync is the updated post data
		const returnValue = await savePostAction(mockDispatch); // Execute again to get the return value
		expect(returnValue).toEqual(updatedPost.res);
	});
});
