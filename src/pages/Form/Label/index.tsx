import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 2rem;

  span {
    display: block;
    font-size: 0.7rem;
    color: #ffffff50;
    max-width: 340px;
  }

  input {
    outline: none;
    border: none;
    max-width: 200px;
    height: 20px;
    border-radius: 5px;
  }

  textarea {
    border: none;
    border-radius: 8px;
    height: 100px;
    outline: none;
    max-width: 400px;
    resize: none;
  }
`;

const Label = ({ type, htmlFor, children, input = true }: props) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {children}
      {input ? (
        <input type={type} id={htmlFor} maxLength={20} autoComplete="off" />
      ) : (
        <textarea maxLength={300}></textarea>
      )}
    </StyledLabel>
  );
};

export default Label;

interface props {
  children: string | React.ReactNode;
  type: string;
  htmlFor: string;
  input?: boolean;
}
