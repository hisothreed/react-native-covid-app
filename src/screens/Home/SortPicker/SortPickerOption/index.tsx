import React from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import Label from '../../../../shared/components/Label';
import {Theme} from '../../../../theme/types';

export type SortPickerOptionType = {label; value};

interface Props {
  option: SortPickerOptionType;
  onPress: (value: string) => void;
}

const Container = styled.TouchableOpacity<{theme: Theme}>`
  padding-horizontal: ${widthPercentageToDP(3.5)};
  padding-vertical: ${widthPercentageToDP(3)};
  border-bottom-color: ${props => props.theme.colors.seperator.opaque};
  border-bottom-width: 1;
  width: 100%;
`;

function SortPickerOption(props: Props) {
  const handlePress = () => props.onPress(props.option.value);
  return (
    <Container onPress={handlePress}>
      <Label style={{textAlign: 'center'}} weight={'regular'} size={'callout'}>
        {props.option.label}
      </Label>
    </Container>
  );
}

export default SortPickerOption;
