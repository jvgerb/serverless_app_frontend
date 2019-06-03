import styled from 'vue-styled-components';

const StyledCard = styled.div`
  display: block;
  margin-bottom: 20px;
  position: relative;

  text-align: left;
  font-family: 'energicos-regular';
  border-color: #fff;
  color: rgba(0,0,0,.87);
  background-color: #fff;
  padding: 35px 40px;
  min-width: 460px;
  border-radius: 6px;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.15);
  box-sizing: border-box;


  @media screen and (max-width: 768px) {
    min-width: 340px;
  }
`;

export default StyledCard;
