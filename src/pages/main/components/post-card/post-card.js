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
	console.log('title', title);
	return (
		<div className={className}>
			<img src={imageUrl} />
			<div className="post-card-footer">
				<h3>Заглавие</h3>
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
				</div>
			</div>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)``;
