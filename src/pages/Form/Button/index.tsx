import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  background-image: linear-gradient(
    105deg,
    rgba(34, 211, 238, 1) 0%,
    rgba(14, 165, 233, 1) 100%
  );
  color: white;
  font-weight: 600;
  border: none;
`;

const Button = ({ children }: props) => {
  return <StyledButton type="button">{children}</StyledButton>;
};

export default Button;

interface props {
  children: string;
}
