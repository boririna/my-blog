import styled from 'styled-components';
import { Icon } from '../../../../components';

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<div className="post-card-footer">
				<h3>{title}</h3>
				<div className="post-card-info">
					<div className="published-at">
						<Icon
							inactive={true}
							id="fa-calendar-o"
							size="18px"
							margin="0 10px 0 0"
							cursor="initial"
						/>
						<p>{publishedAt}</p>
					</div>
					<div className="comments-count">
						<Icon
							inactive={true}
							id="fa-calendar-o"
							size="18px"
							margin="0 10px 0 0"
							cursor="initial"
						/>
						<p>{commentsCount}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)``;
