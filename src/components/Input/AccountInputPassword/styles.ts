import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const Container = styled.View`
  border-width: 4px;
  border-style: solid;
  border-color: ${colors.primary};
  margin-right: 40px;
  margin-bottom: 20px;
  padding: 14px;
  border-radius: 14px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileFieldInput = styled(TextInput)`
  margin-left: 50px;
`;
