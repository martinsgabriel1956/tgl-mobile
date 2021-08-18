import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const Container = styled.View`
  background-color: red;
  width: 120px;
  height: 120px;
  position: absolute;
  top: -56px;
  border-radius: 60px;
  background-color: ${colors.headerBg};
  elevation: 2;
  `;

export const IconContainer = styled.View`
   width: 110px;
   height: 110px;
   border-radius: 60px;
   top: 6px;
   left: 4px;
   position: absolute;
   background-color: ${colors.primary};

   align-items: center;
   justify-content: center;
`;
