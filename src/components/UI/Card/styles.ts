import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const Container = styled.View.attrs({
  shadowColor: colors.border,
  elevation: 3,
})`
  background-color: #fff;
  width: 325px;
  height: 290px;
  border-radius: 12px;
  border-width: .5px;
  border-color: ${colors.border};  
`;
