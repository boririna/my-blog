import styled from 'styled-components';
import { Icon } from '../../../../../../components';

const CommentContainer = ({ className, id, author, content, publishedAt }) => {
	return (
		<div className={className}>
			<div className="infimation-panel">
				<div className="author">
					<Icon
						id="fa-user-circle-o"
						size="21px"
						margin="0 0 0 10px"
						onClick={() => {}}
					/>
					{author}
				</div>
				<div className="publishedßat">
					<Icon
						id="fa-calendar-o"
						size="21px"
						margin="0 0 0 10px"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>
			</div>
			<div className="comment-text">{content}</div>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	& .information-panel {
		display: flex;
		justify-content: between;
	}

	& .author {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
`;
