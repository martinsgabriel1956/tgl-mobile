import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const Container = styled.View`
  border-width: 4px;
  border-style: solid;
  border-color: ${colors.primary};
  margin-right: 40px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 14px;
`;

export const ProfileFieldInput = styled(TextInput)`
  margin-left: 50px;
`;
