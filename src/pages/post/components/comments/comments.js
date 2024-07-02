import React from 'react';
import { useState } from 'react';
import { Icon } from '../../../../components';
import { Comment } from './components/comment/comment';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../../../hooks';
import { addCommentAsync } from '../../../../actions';
import { selectUserId, selectUserRole } from '../../../../selectors';
import styled from 'styled-components';
import { ROLE } from '../../../../constants';

/**
 * @typedef commentInput
 * @property {string} className
 * @property {Array.<CommentData>} comments
 * @property {string} postId
 *
 */

/**
 *
 * @param {commentInput} param0
 * @returns
 */
const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const userRole = useSelector(selectUserRole);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('');
	};

	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={className}>
			{!isGuest && (
				<div className="new-comment">
					<textarea
						name="comment"
						value={newComment}
						placeholder="Комментарий..."
						onChange={({ target }) => setNewComment(target.value)}
					></textarea>
					<Icon
						id="fa-paper-plane-o"
						size="21px"
						margin="0 0 0 10px"
						onClick={() => onNewCommentAdd(userId, postId, newComment)}
					/>
				</div>
			)}

			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						postId={postId}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	margin: 0 auto;
	width: 580px;
	margin-top: 20px;

	& .new-comment {
		display: flex;
		width: 100%;
	}

	& .new-comment textarea {
		width: 550px;
		height: 120px;
		resize: none;
		font-size: 18px;
	}
`;
