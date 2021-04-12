import { Dimensions, Platform, PixelRatio } from 'react-native';

export const { height, width } = Dimensions.get('screen');

const scale = width / 320;

export default function normalize(size) {
  const newSize = size * scale;

  return (Platform.OS === 'ios')
    ? Math.round(PixelRatio.roundToNearestPixel(newSize))
    : Math.round(PixelRatio.roundToNearestPixel(newSize) - 2);
}
