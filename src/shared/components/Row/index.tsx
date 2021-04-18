import {FlexStyle} from 'react-native';
import styled from 'styled-components/native';

const Row = styled.View<{
  flexGrow?: FlexStyle['flexGrow'];
  flex?: FlexStyle['flex'];
  alignItems?: FlexStyle['alignItems'];
  justifyContent?: FlexStyle['justifyContent'];
  minHeight?: number | string;
}>`
  flex-direction: row;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  ${props => (props.minHeight ? 'min-height:' + props.minHeight : '')};
  ${props => (props.flex ? 'flex:' + props.flex : '')};
  ${props => (props.flexGrow ? 'flex-grow:' + props.flexGrow : '')};
`;

export default Row;
