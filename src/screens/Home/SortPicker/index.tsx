import React, {useRef, useState} from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Options,
  Navigation,
  NavigationComponentProps,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import {Screens} from '../../../navigation/screens';
import CardModal from '../../../shared/components/CardModal';
import SortPickerOption, {SortPickerOptionType} from './SortPickerOption';
import Row from '../../../shared/components/Row';
import Label from '../../../shared/components/Label';
import {useTheme} from 'styled-components';
import {Theme} from '../../../theme/types';

interface Props {
  options: Array<SortPickerOptionType>;
  onSubmit: (value: string) => void;
}

export const showSortPicker = (passProps: Props) => {
  return Navigation.showModal({
    component: {
      name: Screens.SortPicker,
      passProps,
      options: {
        layout: {
          backgroundColor: 'transparent',
          componentBackgroundColor: 'transparent',
        },
        modalPresentationStyle:
          OptionsModalPresentationStyle.overCurrentContext,
        animations: {
          showModal: {enabled: false},
          dismissModal: {enabled: false},
        },
        topBar: {visible: false},
      },
    },
  });
};

function SortPicker(props: Props & NavigationComponentProps) {
  const theme = useTheme() as Theme;
  const cardRef = useRef<any>();
  const dismiss = async () => {
    Navigation.dismissModal(props.componentId);
  };
  const onSubmit = value => {
    props.onSubmit(value);
    dismiss();
  };
  return (
    <CardModal onDismiss={dismiss} ref={cardRef}>
      <Row
        alignItems={'center'}
        justifyContent={'center'}
        style={[
          {
            backgroundColor: theme.colors.background.tertiary,
          },
          styles.header,
        ]}>
        <Label size={'headline'} weight={'semibold'}>
          Sort By
        </Label>
      </Row>
      {props.options.map(option => (
        <SortPickerOption
          onPress={onSubmit}
          key={option.value}
          option={option}
        />
      ))}
    </CardModal>
  );
}

SortPicker.options = (): Options => ({});

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: widthPercentageToDP(4),
  },
});

export default SortPicker;
