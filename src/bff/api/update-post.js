export const updatePost = ({ id, imageUrl, title, content }) =>
	fetch(`http://localhost:3005/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			img_url: imageUrl,
			title,
			content,
		}),
	}).then((loadedPost) => {
		return loadedPost.json();
	});
