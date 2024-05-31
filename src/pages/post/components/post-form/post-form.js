import { useRef } from 'react';
import { SpecialPanel } from './../special-panel/special-panel';
import { Icon, Input } from '../../../../components';
import styled from 'styled-components';
import { sanitizeContent } from './utils';

/**
 * @param {string} className
 * @param {PostInfo} post
 * @returns {React.ReactElement}
 */
const PostFormContainer = ({
	className,
	// post: { id, title, imageUrl, content, publishedAt },
	post,
}) => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitleUrl = titleRef.current.value;
		const newContentRef = sanitizeContent(contentRef.current.innerHTML);
		console.log(newImageUrl, newTitleUrl, newContentRef);
	};

	if (post === undefined) {
		return <div>POST UNDEFINED</div>;
	}

	return (
		<div className={className}>
			<Input
				ref={imageRef}
				defaultValue={post.imageUrl}
				placeholder="Изображение..."
			/>
			<Input ref={titleRef} defaultValue={post.title} placeholder="Заголовок..." />
			<SpecialPanel
				publishedAt={post.publishedAt}
				margin="20px 0"
				editButton={
					<Icon
						id="fa-floppy-o"
						size="21px"
						margin="0 0 0 0"
						onClick={onSave}
					/>
				}
			/>

			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{post.content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;
