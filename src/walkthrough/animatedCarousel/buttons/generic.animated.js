import React from 'react';
import { Animated, TouchableOpacity, Text } from 'react-native';

import { styles } from '../../styles';
import { width } from '../../../styles/metrics';

export function genericButton({
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
      (cardAmount - 1 - 1) * width,
      (cardAmount - 1) * width,
      (cardAmount - 1 + 1) * width,
    ],
    outputRange: [1, 0, 0],
  });

  const AnimatedOpacity = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <AnimatedOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[style, { opacity }]}
      disabled={disabled}>
      <Text style={[styles.buttonText, color ? { color: '#ffffff' } : {}]}>
        {text}
      </Text>
    </AnimatedOpacity>
  );
}
