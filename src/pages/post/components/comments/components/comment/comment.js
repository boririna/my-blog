import { Icon } from '../../../../../../components';
import { CLOSE_MODAL, openModal, removeCommentAsync } from '../../../../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../../../../../hooks';
import styled from 'styled-components';
import { selectUserLogin, selectUserRole } from '../../../../../../selectors';
import { ROLE } from '../../../../../../constants';

const CommentContainer = ({ className, postId, id, author, content, publishedAt }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const userRole = useSelector(selectUserRole);
	const userLogin = useSelector(selectUserLogin);

	const onCommentRemove = (id) => {
		// dispatch(removeCommentAsync(requestServer, postId, id));
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	console.log(id, author);

	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							inactive={true}
							id="fa-user-circle-o"
							size="18px"
							margin="0 10px 0 0"
							onClick={() => {}}
						/>
						<p>{author}</p>
					</div>
					<div className="published-at">
						<Icon
							inactive={true}
							id="fa-calendar-o"
							size="18px"
							margin="0 10px 0 0"
							onClick={() => {}}
						/>
						<p>{publishedAt}</p>
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{(isAdminOrModerator || userLogin === author) && (
				<Icon
					id="fa-trash-o"
					size="21px"
					margin="0 0 0 10px"
					onClick={() => onCommentRemove(id)}
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;
	margin-top: 10px;

	& .comment {
		width: 550px;
		// border: 1px solid #000;
		background-color: #eaecec;
		padding: 5px 10px;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
		align-items: center;
	}

	& .published-at {
		display: flex;
		align-items: center;
	}
`;
