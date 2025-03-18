import styled from 'styled-components';
import '/src/global/styles/variables.scss'

const StyledSpan = styled.span<{$color: string}>`
	font-weight: bold;
	background-image: ${({ $color }) => {
    switch ($color) {
      case 'blue':
        return 'linear-gradient(105deg, rgba(34,211,238,1) 0%, rgba(14,165,233,1) 100%)';
      case 'green':
        return 'linear-gradient(105deg, rgba(16,185,129,1) 0%, rgba(190,242,100,1) 100%)';
      case 'purple':
        return 'linear-gradient(105deg, rgb(124, 58, 237) 0%, rgb(96, 106, 250) 100%)';
      case 'red':
        return 'linear-gradient(105deg, rgb(220, 38, 38) 0%, rgb(249, 115, 22) 100%)';
      default:
        return 'linear-gradient(105deg, rgba(34,211,238,1) 0%, rgba(14,165,233,1) 100%)';
    }
  }};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	color: black;
`;

const Span = ({ color , children }: props) => {
	return <StyledSpan $color={color} >{children}</StyledSpan>;
};

export default Span;

interface props {
	color: string
	children: string | React.ReactNode;
}
