import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');



const ENTRIES = [
  { title: 'Solo Leveling', imageUrl: require('../../assets/solo.jpg') },
  { title: 'Naruto', imageUrl: require('../../assets/naruto.jpg') },
  { title: 'Mashle', imageUrl: require('../../assets/mashle.jpg') },
  { title: 'Boku No Hero', imageUrl: require('../../assets/boku.jpg') },
  { title: 'Death Note', imageUrl: require('../../assets/death.jpg') },
  { title: 'One Piece', imageUrl: require('../../assets/one.jpg') },
];

const CarouselComponent = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({ item }) => {
    
    return (
      <View style={styles.slide}>
        <Image source={item.imageUrl} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  const onSnapToItem = (index) => {
    setActiveIndex(index);
    if (index === ENTRIES.length - 1) {
      setTimeout(() => {
        carouselRef.current.snapToItem(0);
      }, 3000);
    }
  };

  const navigateToIndex = (index) => {
    carouselRef.current.snapToItem(index);
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={ENTRIES}
        renderItem={_renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth * 0.8}
        loop={false} 
        autoplay
        autoplayInterval={3000}
        onSnapToItem={onSnapToItem}
      />
      <Pagination
        dotsLength={ENTRIES.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        onPress={(index) => navigateToIndex(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: viewportWidth * 0.8,
    height: viewportHeight * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 50,
  },
  image: {    
    width: '100%',
    height: '80%',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 40,
  },
  dot: {
    marginHorizontal: -10,
    width: 40,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 165, 0, 0.75)', 
    zIndex: 1, 
  },
  
});

export default CarouselComponent;
