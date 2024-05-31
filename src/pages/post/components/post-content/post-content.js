import styled from 'styled-components';
import { H2 } from '../../../../components/h2/h2';
import { Icon } from '../../../../components';
import { PostInfo } from '../../../../classes/post_info';
import { SpecialPanel } from '../special-panel/special-panel';

/**
 * @param {string} className
 * @param {PostInfo} post
 * @returns {React.ReactElement}
 */
const PostContentContainer = ({
	className,
	post,
	// post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={post.imageUrl} alt={post.title} />
			<H2>{post.title}</H2>
			<SpecialPanel
				publishedAt={post.publishedAt}
				margin="20px 0"
				editButton={
					<Icon
						id="fa-pencil-square-o"
						size="21px"
						margin="0 0 0 0"
						onClick={() => {}}
					/>
				}
			/>
			<div className="post-text">{post.content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;
