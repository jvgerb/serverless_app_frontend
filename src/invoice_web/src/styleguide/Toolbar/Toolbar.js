import styled from 'vue-styled-components';

const backgroundColor = { color: String }

const StyledToolbar = styled('div', backgroundColor)`
  display: grid;
  width: 100%;
  height: 64px;

  align-items: center;
  background-color: ${props => props.color};
  border-color: #fff;
  padding: 0 15px;
`;

export default StyledToolbar;
