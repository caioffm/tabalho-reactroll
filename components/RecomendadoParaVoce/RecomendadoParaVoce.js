
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const RECENTLY_WATCHED = [
  { title: 'Fullmetal Alchemist: Brotherhood', imageUrl: getImageUrl('fullmetal') },
  { title: 'Hunter x Hunter', imageUrl: getImageUrl('hunter') },
  { title: 'Cowboy Bebop', imageUrl: getImageUrl('cowboy') },
  { title: 'Neon Genesis Evangelion', imageUrl: getImageUrl('evangelion') },
  { title: 'Steins;Gate', imageUrl: getImageUrl('stains') },
  { title: 'A Viagem de Chihiro', imageUrl: getImageUrl('chihiro') },
];

const RecomendadoParaVoce = () => {
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Recomendado Para Você</Text>
      <Carousel
        data={RECENTLY_WATCHED}
        renderItem={_renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth * 0.52 - 15} 
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        activeSlideAlignment={'start'}
        containerCustomStyle={styles.carouselContainer}
        contentContainerCustomStyle={styles.carouselContentContainer}
        enableMomentum={true}
        enableSnap={true}
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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 15,
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  slide: {
    
    backgroundColor: '#000', 
    borderRadius: 8,
    height: 300, 
    width: viewportWidth * 0.5 - 15, 
    marginRight: 15, 
    marginLeft: 10
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 8,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 10, 
  },
  carouselContainer: {
    width: viewportWidth,
  },
  carouselContentContainer: {
    paddingHorizontal: 15, 
  },
});

function getImageUrl(animeName) {
  switch (animeName) {
    case 'fullmetal':
      return 'https://m.media-amazon.com/images/I/71b0kmOnLHL._AC_UF894,1000_QL80_.jpg';
    case 'hunter':
      return 'https://img.elo7.com.br/product/zoom/1EC5B81/big-poster-do-anime-hunter-x-hunter-tamanho-90x-0-cm-lo005-nerd.jpg';
    case 'cowboy':
      return 'https://m.media-amazon.com/images/I/718jBGavnGL._AC_UF894,1000_QL80_.jpg';
    case 'evangelion':
      return 'https://i.pinimg.com/736x/c1/a5/74/c1a5741769a285be45c3ca6487c63808.jpg';
    case 'stains':
      return 'https://upload.wikimedia.org/wikipedia/pt/3/3d/Steins%3BGate_anime_poster.jpg'
      case 'chihiro':
      return 'https://i.pinimg.com/originals/9d/01/41/9d01415dacae19ee67ea1c0ffa5d24f6.png';
  }}


export default RecomendadoParaVoce;
