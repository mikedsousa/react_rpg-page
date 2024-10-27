import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Span from '../Span';
import Tags from '../Tags';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;


	margin-top: 2rem;
	border-radius: 15px;

	width: 343px;
	max-height: 470px;
	background-color: #151e31;

  div {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

	img {
		width: 100%;
		height: 190px;
		border-radius: 15px 15px 0 0;
	}

	h3 {
		text-align: center;
		line-height: 38px;
		font-size: 1.5rem;
	}

  p {
    margin-block: 1rem;
    text-align: justify;
  }
  
  a {
    text-decoration: none;
    color: #CBD5E1;
  }
  
  .read-more {
    text-decoration: underline;
    text-align: left;
  }

	.tags-container {
		padding: 0;
		margin-bottom: 1rem;
		display: inline-flex;
		flex-wrap: wrap;
		flex-direction: row;
		line-height: 1.5rem;

		span {
			margin-right: 0.5rem;
			font-size: 0.8rem;
		}
	}
`;

const Games = ({ id, image, name, span, sinopse, tags }: props) => {
	const color: string = changeColor();

	function changeColor(): string {
		switch (span) {
			case 'Dungeons and Dragons':
				return 'red';
			case 'Vaesen RPG':
				return 'purple';
			case 'Mutante: Ano Zero':
				return 'green';
			default:
				return 'blue';
		}
	}

	return (
		<StyledDiv>
			<img src={image} alt='teste'/>
			<div>
				<h3>
				<Span color={color}>{span}</Span>	 <br /> {name}
				</h3>
				<p>{sinopse}</p>
				<div className='tags-container'>
					{/* <Span color={color}>Tags: </Span> */}
					{
						tags.map((tag, index) => (
							<Tags key={index}>{tag}</Tags>
						))
					}
				</div>
        <Link to={`/blog/${id}`}><span className='read-more'>Leia mais</span></Link>
        
			</div>
		</StyledDiv>
	);
};

export default Games;

interface props {
  id: string
	image: string;
	name: string;
	span: string;
	sinopse: string | undefined;
	tags: string[];
}
