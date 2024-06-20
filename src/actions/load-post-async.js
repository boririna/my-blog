import { setPostData } from './set-post-data';

export const loadPostAsync = (requestServerFn, postId) => (dispatchFn) => {
	requestServerFn('fetchPost', postId).then((postData) => {
		if (postData.res) {
			dispatchFn(setPostData(postData.res));
		}
		console.log('postData', postData);
		return postData;
	});
};
