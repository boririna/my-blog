import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams, useMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Comments, PostContent, PostForm } from './components';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { RESET_POST_DATA, loadPostAsync } from '../../actions';
import { selectPost } from '../../selectors';
import { initialPostState } from '../../reducers/post-reducer';

const PostContainer = ({ className }) => {
	/** @type {PostInfo}*/
	const post = useSelector(selectPost);
	const dispatch = useDispatch();
	const params = useParams();
	const isCreating = useMatch('/post');
	const isEditing = useMatch('/post/:id/edit');
	const [error, setError] = useState(null);
	const requestServer = useServerRequest();

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			return;
		}
		console.assert(params !== undefined);
		console.assert(requestServer !== undefined);

		let loadResult = loadPostAsync(requestServer, params.id);
		dispatch(loadResult).then((postData) => {
			if (postData.error) {
				setError(postData.error);
			}
			console.log('postData in Post', postData);
		});
	}, [dispatch, requestServer, params.id, isCreating]);

	return error ? (
		<div>{error}</div>
	) : (
		<div className={className}>
			{isCreating || isEditing ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={isCreating ? initialPostState : post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0px 80px;
`;
