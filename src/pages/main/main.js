import { useEffect, useState } from 'react';
import { PostCard } from './components/post-card/post-card';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts').then((posts) => {
			setPosts(posts.res);
		});
	}, [requestServer]);

	console.log('imageUrl', posts);

	return (
		<div className={className}>
			<div>Главная страница</div>
			{posts.map((post) => (
				<PostCard
					key={post.id}
					id={post.id}
					title={post.title}
					imageUrl={post.imageUrl}
					publishedAt={post.publishedAt}
					commentsCount={post.commentsCount}
				/>
			))}
		</div>
	);
};

export const Main = styled(MainContainer)``;
