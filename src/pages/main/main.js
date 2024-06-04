import { useEffect, useState } from 'react';
import { PostCard } from './components/post-card/post-card';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const requestServer = useServerRequest();

	console.log('posts before useEffect', posts);

	useEffect(() => {
		requestServer('fetchPosts').then((posts) => {
			setPosts(posts.res);
		});
		console.log('posts in useEffect', posts);
	}, [requestServer]);

	console.log('posts', posts);

	return (
		<div className={className}>
			<div>Главная страница</div>
			{posts.map(({ id, title, imagUrl, publishedAt, commentsCount }) => (
				<PostCard
					key={id}
					id={id}
					title={title}
					imagUrl={imagUrl}
					publishedAt={publishedAt}
					commentsCount={commentsCount}
				/>
			))}
		</div>
	);
};

export const Main = styled(MainContainer)``;
