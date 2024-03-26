
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';



const { width: viewportWidth } = Dimensions.get('window');

const RECENTLY_WATCHED = [
  
  { title: 'Naruto Shippuden', imageUrl: getImageUrl('naruto') },
  { title: 'One Piece', imageUrl: getImageUrl('one') },
  { title: 'Death Note', imageUrl: getImageUrl('death') },
  { title: 'Dragon Ball Z', imageUrl: getImageUrl('dragon') },
  { title: 'Boku no Hero Academia', imageUrl: getImageUrl('boku') },
  { title: 'Ataque dos Titãs', imageUrl: getImageUrl('attack') },

];

function getImageUrl(animeName) {
  switch (animeName) {
    case 'naruto':
      return 'https://images.justwatch.com/poster/306057903/s718/naruto-shippuden.jpg';
    case 'one':
      return 'https://images-cdn.ubuy.co.in/633ff1157e3fbc25557517c8-one-piece-poster-japanese-anime-posters.jpg';
    case 'death':
      return 'https://m.media-amazon.com/images/I/61k3qe5zitL._AC_SY879_.jpg';
    case 'dragon':
      return 'https://img.elo7.com.br/product/zoom/2C16CE5/big-poster-anime-dragon-ball-z-lo001-tamanho-90x60-cm-poster.jpg';
    case 'boku':
      return 'https://i.pinimg.com/736x/1b/93/49/1b934928aea8257e00f2cf6bee855aee.jpg'
     case 'attack':
      return 'https://media.fstatic.com/ZTN-ks9Q4HWdfwXOISyavCQxAjM=/322x478/smart/filters:format(webp)/media/movies/covers/2020/12/EoePMKWVgAAA_LJ.jpeg';
  }}

const RecentementeAdicionados = () => {
  const _renderItem = ({ item }) => {

    
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (

    <View style={styles.container}>
      <Text style={styles.headerTitle}>Recentemente Adicionados</Text>
      <Carousel
        data={RECENTLY_WATCHED}
        renderItem={_renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth * 0.72}
        inactiveSlideScale={0.95}
        inactiveSlideOpacity={0.7}
        activeSlideAlignment={'start'}
        containerCustomStyle={styles.carouselContainer}
        contentContainerCustomStyle={styles.carouselContentContainer}
        enableMomentum={true}
        enableSnap={true}
        decelerationRate={'fast'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: 500,
    height:500,
    backgroundColor: '#000',
    marginVertical: -70,
    
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 0,
    paddingHorizontal: 5,
    marginTop: 15,
    color: '#fff',
  },
  slide: {    
    
    borderRadius: 8,
    height: 300,
    width: 300,
    alignItems: 'center',
    
  },
  image: {    
    width: '98%',
    height: '100%',
    borderRadius: 8,
    top: 0,
    left: 0,
    padding: 0,
    margin: 0,
  },

  title: {
    bottom: -10,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',    
  },
  carouselContainer: {    
    marginTop: 15,    
  },
  
});



export default RecentementeAdicionados;
