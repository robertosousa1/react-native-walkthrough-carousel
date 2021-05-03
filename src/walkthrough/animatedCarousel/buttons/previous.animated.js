import React from 'react';
import { Animated, TouchableOpacity, Text } from 'react-native';

import { styles } from '../../styles';
import { width } from '../../../styles/metrics';

export function previousButton({
  onPress,
  disabled = false,
  style,
  text,
  color,
  scrollX,
  cardAmount,
}) {
  const opacity = scrollX.interpolate({
    inputRange: [
      -width,
      0,
      width,
      (cardAmount - 1 - 1) * width,
      (cardAmount - 1) * width,
    ],
    outputRange: [0, 0, 1, 1, 0],
  });

  const AnimatedOpacity = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <AnimatedOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[style, { opacity }]}
      disabled={disabled}>
      <Text
        style={[styles.buttonText, { color }]}
        adjustsFontSizeToFit
        maxFontSizeMultiplier={1.3}>
        {text}
      </Text>
    </AnimatedOpacity>
  );
}
