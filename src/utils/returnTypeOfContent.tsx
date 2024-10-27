import { IArticle } from '../interfaces/IArticle';

let pID: number = 0;

export const returnTypeOfContent = (article: IArticle) => {

	switch (article.type) {
		case 'paragraph':
			pID++;
			return (
			<p key={`p${article.page_id}${pID}`}>{article.content}</p>
		);
		case 'heading_1':
			pID++;
			return (
				<h1 key={`h1${article.page_id}${pID}`}>{article.content}</h1>
			);
		case 'heading_2':
			pID++;
			return (
				<h2 key={`h2${article.page_id}${pID}`}>{article.content}</h2>
			);
		case 'heading_3':
			pID++;
			return (
				<h3 key={`h3${article.page_id}${pID}`}>{article.content}</h3>
			);
		case 'image':
			pID++;
			return (
				<img
					key={`img${article.page_id}${pID}`}
					src={article.content}
					alt="article"
				/>
			);
		case 'bookmark':
			pID++;
			return (
				<a
					key={`a${article.page_id}${pID}`}
					href={article.content}
					rel="external"
					target="_blank"
				>
					{article.caption}
				</a>
			);

		default:
			pID++;
			return <p key={`p${article.page_id}${pID}`}>{article.content}</p>;
	}
};
