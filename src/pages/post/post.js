import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams, useMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Comments, PostContent, PostForm } from './components';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { RESET_POST_DATA, loadPostAsync } from '../../actions';
import { selectPost } from '../../selectors';
import { initialPostState } from '../../reducers/post-reducer';
import { Error } from '../../components';

const PostContainer = ({ className }) => {
	/** @type {PostInfo}*/
	const post = useSelector(selectPost);
	const dispatch = useDispatch();
	const params = useParams();
	const isCreating = useMatch('/post');
	const isEditing = useMatch('/post/:id/edit');
	const [error, setError] = useState(true);
	const requestServer = useServerRequest();

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			return;
		}

		let loadResultFn = loadPostAsync(requestServer, params.id);
		let dispatchPromise = dispatch(loadResultFn);

		dispatchPromise.then((postData) => {
			setError(postData.error);
		});
	}, [dispatch, requestServer, params.id, isCreating]);

	return error ? (
		<Error error={error} />
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
