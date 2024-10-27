import styled from 'styled-components';
import Span from '../../components/Span';
import { gifs } from '../../db.ts';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BuildingGif = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 90vh;
	gap: 2rem;
	text-align: center;
	padding: 1rem;

	h1 {
		font-size: 3rem;
	}

	h2 {
		font-size: 2rem;
	}

	img {
		width: 80vw;
		max-width: 600px;
	}
`;

const Building = () => {
	const location = useLocation().pathname;
	const [gif, setGif] = useState<string>();

	useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gifs.length);
		setGif(gifs[randomIndex]);
	}, [location]);

	return (
		<>
			<BuildingGif>
				<h1>
					<Span color="red">EM CONSTRUÇÃO!</Span>
				</h1>
				<h2>Mais novidades em breve!</h2>
				<img src={gif} />
			</BuildingGif>
		</>
	);
};

export default Building;
