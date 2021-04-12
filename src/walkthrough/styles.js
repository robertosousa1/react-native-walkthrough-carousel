import { StyleSheet, PixelRatio } from 'react-native';

import colors from '../styles/colors';

import { width, height } from '../styles/metrics';

import normalize from '../utils/normalize';

export const LOGO_WIDTH = width * 0.8;
export const LOGO_HEIGHT = 50;

export const SLIDER_WIDTH = width;
export const ITEM_WIDTH = SLIDER_WIDTH;
export const ITEM_HEIGHT = '100%';

export const DONE_BUTTON_WIDTH = width - 65;
export const NEXT_BUTTON_WIDTH = width * 0.45;
export const PREVIOUS_BUTTON_WIDTH = width * 0.35;

export const BTN_HEIGHT = normalize(50);
export const BTN_MARGIN = normalize(24);
export const BTN_DISTANCE = normalize(4);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lighter,
  },
  logoView: {
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
    marginVertical: normalize(24),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  logo: {
    marginTop: '5%',
    width: '85%',
    height: '100%',
  },
  carouselContainer: {},
  carouselContentContainer: {
    alignItems: 'center',
  },
  itemContainer: {
    width: Math.round(SLIDER_WIDTH * 0.78),
    zIndex: 2,
    alignSelf: 'center',
    borderRadius: ITEM_WIDTH / 20,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: colors.light,
    flex: 1,
    lineHeight: 28,
    justifyContent: height > 640 ? 'flex-start' : 'space-evenly',
  },
  counter: {
    marginTop: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    flex: 1.5,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 28,
    color: colors.darker,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: '300',
    fontSize: 15,
    color: colors.dark,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 25,
  },
  bannerImage: {
    resizeMode: 'contain',
    flex: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bold: { fontWeight: 'bold' },
  paginationContainer: {},
  dotStyle: {
    width: normalize(32),
    height: normalize(10),

    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  inactiveDotStyle: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: 16,
    backgroundColor: colors.light,
    marginHorizontal: -8,
  },
  buttonContainer: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  nextButton: externalStyles => ({
    width: NEXT_BUTTON_WIDTH,
    height: BTN_HEIGHT,

    marginLeft: 'auto',
    marginRight: BTN_MARGIN,
    marginBottom: BTN_MARGIN,

    justifyContent: 'center',

    backgroundColor: externalStyles ? externalStyles.backgroundColor : colors.primary,
    borderColor: externalStyles ? externalStyles.borderColor : colors.primary,
    borderWidth: externalStyles ? externalStyles.borderWidth : 2,
    borderRadius: Math.round(NEXT_BUTTON_WIDTH / 16),
    zIndex: 1,
  }),
  previousButton: externalStyles => ({
    width: PREVIOUS_BUTTON_WIDTH,
    height: BTN_HEIGHT,

    marginLeft: BTN_MARGIN,
    marginRight: BTN_DISTANCE,
    marginBottom: BTN_MARGIN,

    justifyContent: 'center',

    borderWidth: externalStyles ? externalStyles.borderWidth : 1,
    borderColor: externalStyles ? externalStyles.borderColor : colors.primary,
    borderRadius: Math.round(PREVIOUS_BUTTON_WIDTH / 16),
    zIndex: 1,
  }),
  doneButton: externalStyles => ({
    width: DONE_BUTTON_WIDTH,
    height: BTN_HEIGHT,

    backgroundColor: externalStyles ? externalStyles.backgroundColor : colors.primary,
    borderWidth: 2,
    borderColor: externalStyles ? externalStyles.borderColor : colors.primary,
    borderRadius: Math.round(NEXT_BUTTON_WIDTH / 16),
  }),
  buttonText: {
    fontSize: PixelRatio.getFontScale() > 1.7 ? 16 : 18,
    color: colors.secundary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
