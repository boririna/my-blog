import styled from 'styled-components';
import { H2 } from '../../../../components/h2/h2';
import { Icon, Input } from '../../../../components';

const PostFormContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<Input defaultValue={imageUrl} />
			<Input defaultValue={title} />
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon
						id="fa-calendar-o"
						size="18px"
						margin="0 10px 0 0"
						cursor="initial"
						onClick={() => {}}
					/>
					<p>{publishedAt}</p>
				</div>
				<div className="buttons">
					<Icon
						id="fa-pencil-square-o"
						size="21px"
						margin="0 0 0 0"
						onClick={() => {}}
					/>
					<Icon
						id="fa-trash-o"
						size="20px"
						margin="0 0 0 10px"
						onClick={() => {}}
					/>
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .special-panel {
		margin: -20px 0 20px;
		font-size: 18px;
		display: flex;
		justify-content: space-between;
	}

	& .published-at {
		display: flex;
	}

	& i {
	}

	& .buttons {
		display: flex;
	}

	& .post-text {
		font-size: 18px;
	}
`;
