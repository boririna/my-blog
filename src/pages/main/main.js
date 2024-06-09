import { useEffect, useState } from 'react';
import { PostCard } from './components/post-card/post-card';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const requestServer = useServerRequest();
	// Если не использовать useEffect, то происходит запрос постов и обновление состояния, обновление состояния запускает ререндер, а ререндер запускает запрос постов. Получается бесконечный цикл.
	// requestServer('fetchPosts').then((posts) => {
	// 	setPosts(posts.res);
	// });

	console.log('posts', posts);
	// Вопрос. Пустой массив постов выводится два раза и потом полученный массив постов выводится два раза в консоль-логе. Не понятно почему два раза.
	useEffect(() => {
		requestServer('fetchPosts').then((posts) => {
			setPosts(posts.res);
		});
	}, [requestServer]);

	return (
		<div className={className}>
			<div>Главная страница</div>
			<div className="post-list">
				{posts.map((post) => {
					return (
						<PostCard
							key={post.id}
							id={post.id}
							title={post.title}
							imageUrl={post.imageUrl}
							publishedAt={post.publishedAt}
							commentsCount={post.commentsCount}
						/>
					);
				})}
			</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
	}
`;
