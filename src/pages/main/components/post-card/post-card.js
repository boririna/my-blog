import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';

const PostCardContainer = (props) => {
	return (
		<div className={props.className}>
			<Link to={`/post/${props.id}`}>
				<img src={props.imageUrl} alt={props.title} />
				<div className="post-card-footer">
					<h4>{props.title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								inactive={true}
								id="fa-calendar-o"
								size="18px"
								margin="0 10px 0 0"
								cursor="initial"
							/>
							<p>{props.publishedAt}</p>
						</div>
						<div className="comments-count">
							<Icon
								inactive={true}
								id="fa-comment-o"
								size="18px"
								margin="0 10px 0 0"
								cursor="initial"
							/>
							<p>{props.commentsCount}</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	width: 280px;
	display: flex;
	flex-direction: column;
	margin: 20px;
	background-color: #eaecec;

	& .img {
		display: block;
	}

	& h4 {
		margin: 5px 0;
	}

	& .post-card-footer {
		margin: 0 10px 10px 10px;
	}

	& .post-card-info {
		display: flex;
		justify-content: space-between;
	}

	& .published-at {
		display: flex;
		align-items: center;
	}

	& .comments-count {
		display: flex;
		align-items: center;
	}
`;
