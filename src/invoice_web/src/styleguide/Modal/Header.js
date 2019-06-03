import styled from 'vue-styled-components';

const colorProps = { color: String };

const Header = styled('div', colorProps)`
  border-bottom: 1px solid #E0E0E0;
  margin-top: 9px;
  text-align: left;

  color: ${props => props.color};
`;

export default Header;
