import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from 'react';
import styled from 'styled-components/native';
import {
  Animated,
  StyleSheet,
  ViewStyle,
  StyleProp,
  Dimensions,
} from 'react-native';

interface Props {
  children?;
  transparent?: Boolean;
  style?: StyleProp<ViewStyle>;
  onDismiss: () => void;
}

export interface CardModalRef {
  dismiss: () => void;
}

const Frame = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const OutsideClicker = styled.Pressable`
  background: transparent;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const CardModal = forwardRef<CardModalRef, Props>((props, ref) => {
  const [opacity] = useState(new Animated.Value(0));
  const [isVisible, setIsVisible] = useState(false);

  const animateOut = () => {
    return new Promise(resolve => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(resolve);
    });
  };

  const animateIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setIsVisible(true);
    animateIn();
  }, []);
  const dismiss = async () => {
    await animateOut();
    setIsVisible(false);
    props.onDismiss?.();
  };
  useImperativeHandle(ref, () => ({
    dismiss,
  }));
  const onClickOutside = () => {
    return dismiss();
  };
  if (isVisible === false) {
    return null;
  }
  return (
    <Frame>
      <Animated.View
        style={[
          styles.container,
          {
            opacity,
          },
        ]}>
        <OutsideClicker onPress={onClickOutside}>
          <></>
        </OutsideClicker>
      </Animated.View>

      <Animated.View
        style={[
          styles.content,
          props.style,
          styles.card,
          {
            opacity: opacity.interpolate({
              inputRange: [0, 0.5],
              outputRange: [0, 1],
            }),
          },
        ]}>
        {props.children}
      </Animated.View>
    </Frame>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  content: {
    backgroundColor: 'white',
    alignItems: 'center',
    zIndex: 100000,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  card: {
    maxHeight: Dimensions.get('screen').height - 100,
    borderRadius: 10,
    width: '90%',
  },
});

export default CardModal;
