import React from 'react';
import { Animated, TouchableHighlight, Text } from 'react-native';

import { styles } from '../../styles';
import { width } from '../../../styles/metrics';

const AnimatedHighlight = Animated.createAnimatedComponent(TouchableHighlight);

export function doneButton({
  onPress,
  index,
  style,
  underlayColor = '#fff',
  text,
  scrollX,
  disabled,
  cardAmount,
}) {

  const opacity = scrollX.interpolate({
    inputRange: [
      (cardAmount - 1 - 1) * width,
      (cardAmount - 1) * width,
      (cardAmount - 1 + 1) * width,
    ],
    outputRange: [0, 1, 1],
  });

  return (
    index >= cardAmount - 2 && (
      <AnimatedHighlight
        onPress={!disabled ? onPress : () => { }}
        underlayColor={underlayColor}
        style={[
          style,
          {
            width,
            position: 'absolute',
            marginLeft: '7.5%',
            marginRight: '31%',
            opacity,
            elevation: disabled ? -2 : 1,
            zIndex: disabled ? -2 : 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Text
          adjustsFontSizeToFit
          maxFontSizeMultiplier={1.3}
          style={[
            styles.buttonText,
            {
              textAlignVertical: 'center',
            },
          ]}>
          {text}
        </Text>
      </AnimatedHighlight>
    )
  );
}
