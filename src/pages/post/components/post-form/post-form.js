import { useLayoutEffect, useRef, useState } from 'react';
import { SpecialPanel } from './../special-panel/special-panel';
import { Icon, Input } from '../../../../components';
import { sanitizeContent } from './utils';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePostAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';
import styled from 'styled-components';

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
	const [imageUrlValue, setImageUrlValue] = useState(post.imageUrl);
	const [titleValue, setTitleValue] = useState(post.title);

	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(post.imageUrl);
		setTitleValue(post.title);
	}, [post.imageUrl, post.title]);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(requestServer, {
				id: post.id,
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => {
			return navigate(`/post/${id}`);
		});
	};

	if (post === undefined) {
		return <div>POST UNDEFINED</div>;
	}

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleValue(target.value);

	return (
		<div className={className}>
			<Input
				value={imageUrlValue}
				placeholder="Изображение..."
				onChange={onImageChange}
			/>
			<Input
				value={titleValue}
				placeholder="Заголовок..."
				onChange={onTitleChange}
			/>
			<SpecialPanel
				id={post.id}
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
		min-height: 80px;
		border: 1px solid #000;
		border-radius: 3px;
		font-size: 18px;
		white-space: pre-line;
	}
`;
