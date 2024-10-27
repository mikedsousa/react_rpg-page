import styled from "styled-components";

const StyledTags = styled.span`
  background-color: white;
  color: black;
  padding: 2px 10px;
  border-radius: 15px;
`

const Tags = ({children}: props) => <StyledTags>{children}</StyledTags>

 
export default Tags;

interface props {
  children: string;
}