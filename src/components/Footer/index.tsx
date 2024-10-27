import styled from "styled-components";
import Span from "../Span";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";


const StyledFooter = styled.footer`
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content:space-around;
  max-width: 1150px;
	margin: 2rem auto 0;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid #eaeaea;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  div {
    display: flex;
    gap: 1rem;


    .icon {
      color: #22d3ee;
      font-size: 1.8rem;
    }
  }
`

const Footer = () => {
  return ( 
    <StyledFooter>
      <p>Desenvolvido por <Span color="blue"><a href="https://www.linkedin.com/in/mike-de-sousa/" rel='external' target="_blank">Mike d'Sousa</a></Span></p>
      <div>
        <a href="https://www.instagram.com/mike.dsousa/" rel='external' target="_blank"><FaInstagram className="icon" /></a>
        <a href="https://github.com/mikedsousa"  rel='external' target="_blank"><FaGithub className="icon" /></a>
        <a href="https://www.linkedin.com/in/mike-de-sousa/"  rel='external' target="_blank"><FiLinkedin className="icon" /></a>
      </div>
    </StyledFooter>
   );
}
 
export default Footer;