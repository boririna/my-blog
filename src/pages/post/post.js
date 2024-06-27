import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams, useMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Comments, PostContent, PostForm } from './components';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { RESET_POST_DATA, loadPostAsync } from '../../actions';
import { selectPost } from '../../selectors';
import { initialPostState } from '../../reducers/post-reducer';
import { Error, PrivateContent } from '../../components';
import { ROLE } from '../../constants';

const PostContainer = ({ className }) => {
	/** @type {PostInfo}*/
	const post = useSelector(selectPost);
	const dispatch = useDispatch();
	const params = useParams();
	const isCreating = useMatch('/post');
	const isEditing = useMatch('/post/:id/edit');
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const requestServer = useServerRequest();

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}

		let loadResultFn = loadPostAsync(requestServer, params.id);
		let dispatchPromise = dispatch(loadResultFn);

		dispatchPromise.then((postData) => {
			setError(postData.error);
			setIsLoading(false);
		});
	}, [dispatch, requestServer, params.id, isCreating]);

	if (isLoading) {
		return null;
	}

	const SpecificPostPage =
		isCreating || isEditing ? (
			<PrivateContent access={[ROLE.ADMIN]}>
				<div className={className}>
					<PostForm post={post} />
				</div>
			</PrivateContent>
		) : (
			<div className={className}>
				<PostContent post={isCreating ? initialPostState : post} />
				<Comments comments={post.comments} postId={post.id} />
			</div>
		);

	return error ? <Error error={error} /> : SpecificPostPage;
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0px 80px;
`;
