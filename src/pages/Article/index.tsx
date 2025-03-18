import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Article.module.scss';

import { IArticle } from '../../interfaces/IArticle.ts';
import useFetch from '../../hooks/useFetch.tsx';
import { returnTypeOfContent } from '../../utils/returnTypeOfContent.tsx';

const Article = () => {
	const { id } = useParams<{ id: string }>();
	const [articleData, setArticleData] = useState<IArticle[]>();
	const navigate = useNavigate();

	// const URL_API: string = `https://blog-api-kj8x.onrender.com/api/${id}`;
	const URL_API: string = `http://localhost:3000/api/${id}`;

	const { data, error } = useFetch<IArticle[]>(URL_API);

	useEffect(() => {
		if (error) {
			console.error('Erro ao buscar dados:', error);
			navigate('/notfound');
		} else if (data) {
			setArticleData(data);
		}
	}, [data, error, navigate]);

	return (
		<section className={styles.articles}>
			{articleData && articleData.length > 0 ? (
				articleData.map((article) => {
					return returnTypeOfContent(article);
				})
			) : (
				<p>
					Um grupo de goblins atrasou a caravana... Carregando o
					artigo...
				</p>
			)}
		</section>
	);
};

export default Article;
