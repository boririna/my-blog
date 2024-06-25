import { setPostData } from './set-post-data';

export const loadPostAsync = (requestServerFn, postId) => (dispatchFn) => {
	return requestServerFn('fetchPost', postId).then((postData) => {
		if (postData.res) {
			dispatchFn(setPostData(postData.res));
		}

		return postData;
	});
};
