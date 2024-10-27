import styled from 'styled-components';
import Navbar from '../Navbar';

// Usando $slide como uma prop transitória (transient prop)
const Menu = styled.div<{ $slide: boolean }>`

  nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    background-color: #0f172ad5;
    /* background-color: #0F172A; */
    width: 100vw;
    gap: 1rem;
    text-align: right;
    padding: 1rem;
    font-weight: bold;
    font-size: 1.5rem;
    opacity: ${({ $slide }) => ($slide ? '1' : '0')};
    visibility: ${({ $slide }) => ($slide ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

    a {
      text-decoration: none;
      color: #CBD5E1;
    }
  }
`;

const DropDown = ({ isOpen }: Props) => {
  return (
    <Menu $slide={isOpen}>
      <Navbar />
    </Menu>
  );
};

export default DropDown;

interface Props {
  isOpen: boolean; // Usado internamente no componente
}
