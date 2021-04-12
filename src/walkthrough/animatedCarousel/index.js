import { getInputRangeFromIndexes } from 'react-native-snap-carousel';

import * as buttons from './buttons';

import { SLIDER_WIDTH } from '../styles';

const TRANSLATE_VALUE = Math.round(SLIDER_WIDTH * 0.3);

export function scrollInterpolator(index, carouselProps) {
  const range = [1, 0, -1];
  const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
  const outputRange = range;

  return { inputRange, outputRange };
}

export function animatedStyles(_, animatedValue, carouselProps) {
  const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';
  let animatedTransform = {};

  if (carouselProps.inactiveSlideScale < 1) {
    animatedTransform = {
      transform: [
        {
          scaleY: animatedValue.interpolate({
            inputRange: [-0.6, 0, 0.6],
            outputRange: [
              carouselProps.inactiveSlideScale,
              1,
              carouselProps.inactiveSlideScale,
            ],
          }),
          [translateProp]: animatedValue.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [
              TRANSLATE_VALUE - 56 * carouselProps.inactiveSlideScale,
              0,
              -TRANSLATE_VALUE + 56 * carouselProps.inactiveSlideScale,
            ],
          }),
        },
      ],
    };
  }

  return {
    ...animatedTransform,
  };
}

export const AnimatedButton = (
  props,
) => {
  return (buttons[props.btnType] || buttons.generic)({
    ...props,
    btnType: undefined,
  });
};
