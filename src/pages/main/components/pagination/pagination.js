import styled from 'styled-components';
import { Button } from '../../../../components';

const PaginationContainer = ({ className, page, setPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button onClick={() => setPage(page + 1)}>Следующая</Button>
			<Button onClick={() => setPage(1)}>В конец</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: center;
	padding: 0 20px 40px 20px;

	& button {
		margin: 0 20px;
	}

	& .current-page {
		width: 100%;
		height: 32px;
		text-align: center;
		font-size: 18px;
		font-weight: 500;
		line-height: 30px;
	}
`;
