import { setPostData } from './set-post-data';

// export const addCommentAsync = (requestServer, id) => (dispatch) => {
// 	requestServer('removePostComment', id).then((postData) => {
// 		dispatch(setPostData(postData.res));
// 	});
// };

// Sends a request for a operatin to remove a comment in the store and recieve updated data of this post

export const removeCommentAsync = (requestServer, postId, id) => {
	return (dispatch) => {
		requestServer('removePostComment', postId, id).then((postData) => {
			dispatch(setPostData(postData.res));
		});
	};
};
