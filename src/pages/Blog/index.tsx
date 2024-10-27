import Games from '../../components/Games';
import useFetch from '../../hooks/useFetch';
import { IGameInfo } from '../../interfaces/ICardInfo';
import styles from './Blog.module.scss';

const Blog = () => {
	const URL_API: string = 'https://blog-api-kj8x.onrender.com/api';
	// const URL_API: string = 'http://localhost:3000/api';

  const { data } = useFetch<IGameInfo[]>(URL_API);

	if (!data) {
		return <p>Loading...</p>;
	}

  console.log(data)

	return (
		<section className={styles.container}>
			{data
				.filter((article) => article.type === 'artigo' && article.status === 'Postado')
				.map((article) => (
          
          <Games
          key={article.id_page}
          image={article.image}
          name={article.title}
          sinopse={article.sinopse}
          id={article.id_page}
          tags={article.tags}
        />
				))}
		</section>
	);
};

export default Blog;
