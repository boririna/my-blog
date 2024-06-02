// export const addCommentAsync = (requestServer, id) => (dispatch) => {
// 	requestServer('removePostComment', id).then((postData) => {
// 		dispatch(setPostData(postData.res));
// 	});
// };

// Sends a request for a operatin to remove a post in the store and recieve updated data of this post

export const removePostAsync = (requestServer, id) => {
	return () => {
		return requestServer('removePost', id);
	};
};
