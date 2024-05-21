import React, { useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Modal } from './components';
import { Authorisation, Registration, Users, Post } from './pages';
import { setUser } from './actions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { PostForm } from './pages/post/components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: white;
	margin: 0 auto;
`;
const Page = styled.div`
	padding: 120px 0 0;
	height: 100%;
`;

export const Blog = ({ className }) => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);
		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	});

	return (
		<AppColumn>
			<Header className={className} />
			<Page>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<Authorisation />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/post/:id/edit" element={<PostForm />} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Page>
			<Footer />
			{<Modal />}
		</AppColumn>
	);
};
