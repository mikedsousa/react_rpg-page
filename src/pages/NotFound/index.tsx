import styled from 'styled-components';
import Span from '../../components/Span';
import d10_0 from '/src/assets/d10-0.png'
import d10_4 from '/src/assets/d10-4.png'

const Error404 = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
  gap: 3rem;
  text-align: center;
  padding: 1rem;

  span {
    font-size: 2.8rem;
  }

  h1 {
    font-size: 2rem;
  }

  img {
    width: 100px;
  }
`;

const NotFound = () => {
	return (
		<Error404>
			<Span color="red">Você falhou em investigação!</Span>
			<h1>A página não foi encontrada!</h1>
      <picture>
        <img src={d10_4}/>
        <img src={d10_0}/>
        <img src={d10_4}/>
      </picture>
		</Error404>
	);
};

export default NotFound;
