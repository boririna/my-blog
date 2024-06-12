import { useEffect, useState } from 'react';
import { PostCard } from './components/post-card/post-card';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';
import { Pagination, Search } from './components';
import { PAGINATION_LIMIT } from '../../constants';
import { getLastPageFromLinks } from './utils';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const requestServer = useServerRequest();
	// Если не использовать useEffect, то происходит запрос постов и обновление состояния, обновление состояния запускает ререндер, а ререндер запускает запрос постов. Получается бесконечный цикл.
	// requestServer('fetchPosts').then((posts) => {
	// 	setPosts(posts.res);
	// });

	// Вопрос. Пустой массив постов выводится два раза и потом полученный массив постов выводится два раза в консоль-логе. Не понятно почему два раза.
	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then((postsLinks) => {
			setPosts(postsLinks.res.posts);
			setLastPage(getLastPageFromLinks(postsLinks.res.links));
		});
	}, [requestServer, page]);

	return (
		<div className={className}>
			<div>Главная страница</div>
			<Search />
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
			{lastPage > 1 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
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
