import styled from "styled-components";

const StyledFieldSet = styled.fieldset`
  .form_control {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__title {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

  }
`;

const Fieldset = ({legend, children}: props) => {
  return (
    <StyledFieldSet className={"form_control"}>
      <legend className={"form_control__title"}>{legend}</legend>
      {children}
    </StyledFieldSet>
  );
};

export default Fieldset;

interface props {
	legend: string;
  children?: React.ReactNode
}