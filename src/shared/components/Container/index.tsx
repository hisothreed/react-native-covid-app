import styled from 'styled-components/native';
import theme from '../../../theme';
import {Theme} from '../../../theme/types';

interface Props {
  theme: Theme;
  level?: keyof Theme['colors']['background'];
}

const Container = styled.View<Props>`
  background: ${(props: Props) =>
    props.theme.colors.background[props.level || 'primary']};
`;

export default Container;
