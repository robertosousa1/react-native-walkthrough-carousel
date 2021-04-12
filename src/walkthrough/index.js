import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Image, Animated, PixelRatio } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import {
  scrollInterpolator,
  animatedStyles,
  AnimatedButton,
} from './animatedCarousel';

import { height } from '../styles/metrics';
import { ITEM_WIDTH, SLIDER_WIDTH, styles } from './styles';

const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.textContainer}>
      {item.title}
      {item.text}
    </View>
    {height > 640 && PixelRatio.getFontScale() <= 1.5 ? item.banner : undefined}
  </View>
);

export default function WalkThrough({ logo, carousel: data, buttons }) {
  const [state, setState] = useState({ index: 0 });

  const carousel = useRef(null);

  const scrollX = useRef(new Animated.Value(0)).current;

  const nextCard = () => {
    if (typeof carousel.current?.snapToNext === 'function')
      carousel.current.snapToNext();
    return state.index < data.length - 1
      ? setState((currentState) => ({ index: currentState.index + 1 }))
      : state.index;
  };

  const previousCard = () => {
    if (typeof carousel.current?.snapToNext === 'function')
      carousel.current.snapToPrev();
    return state.index > 0
      ? setState((currentState) => ({ index: currentState.index - 1 }))
      : state.index;
  };

  const pagination = () => (
    <Pagination
      dotsLength={data.length}
      activeDotIndex={state.index}
      containerStyle={styles.paginationContainer}
      dotContainerStyle={{ height: 0, padding: 0, marginTop: -16 }}
      dotStyle={styles.dotStyle}
      inactiveDotStyle={styles.inactiveDotStyle}
    />
  );

  const Item = renderItem;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoView}>
        {logo && <Image source={logo} style={styles.logo} />}
      </View>
      <Carousel
        ref={carousel}
        data={data}
        renderItem={({ item }) => <Item item={{ ...item }} />}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        contentContainerCustomStyle={styles.carouselContentContainer}
        inactiveSlideShift={0}
        initialScrollIndex={0}
        initialNumToRender={2}
        maxToRenderPerBatch={3}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        onSnapToItem={(index) => setState({ index })}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        scrollEventThrottle={16}
        horizontal
        useScrollView
        enableSnap
        directionalLockEnabled
      />
      {pagination()}
      <View style={styles.buttonContainer}>
        <AnimatedButton
          onPress={previousCard}
          style={styles.previousButton(buttons.previousButton.styles)}
          text={buttons.previousButton.text || 'Previous'}
          btnType="previous"
          index={state.index}
          scrollX={scrollX}
          disabled={state.index === 0 || state.index === data.length - 1}
          cardAmount={data.length}
          color={buttons.previousButton.styles.color}
        />

        <AnimatedButton
          onPress={nextCard}
          style={styles.nextButton(buttons.nextButton.styles)}
          text={buttons.nextButton.text || 'Next'}
          btnType="next"
          index={state.index}
          scrollX={scrollX}
          disabled={state.index === data.length - 1}
          cardAmount={data.length}
        />

        <AnimatedButton
          onPress={buttons.doneButton.onPress || null}
          style={styles.doneButton(buttons.doneButton.styles)}
          text={buttons.doneButton.text || 'Continue'}
          btnType="done"
          index={state.index}
          scrollX={scrollX}
          disabled={!(state.index === data.length - 1)}
          cardAmount={data.length}
        />
      </View>
    </SafeAreaView>
  );
}