import styled from "styled-components";

const StyledIframe = styled.iframe`
  min-width: 100%;
  height: 100vh;
  border: none;
  background-color: transparent;
`;

const Form = () => {
  return (
    <>
      <StyledIframe
        src="https://0cyl6y6s.forms.app/form/67d9f48f3aaa500002d8baca"
      ></StyledIframe>
    </>
  );
};

export default Form;
