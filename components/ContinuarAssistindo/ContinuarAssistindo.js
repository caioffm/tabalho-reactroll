import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';


const data = [
  {
    id: '1',
    title: 'THE GREAT JAHY WILL NOT BE DEFEATED!',
    season: 'S1 E19',
    subtitle: 'A Rei Demônio Na...',
    remainingTime: '22m restantes',
    thumbnail: require('../../assets/jahy.jpg'), 
    dub: 'Dub | Leg'
  },
  {
    id: '2',
    title: 'THE DAILY LIFE OF THE IMMORTAL KING',
    season: 'S1 E5',
    subtitle: 'Os irmãos da Facção...',
    remainingTime: '20m restantes',
    thumbnail: require('../../assets/dayly.jpg'), 
    dub: 'Dub English | Leg'
  },
  {
    id: '3',
    title: 'Attack on Titan',
    season: 'Season 4',
    subtitle: 'The Final Season',
    remainingTime: '30m remaining',
    thumbnail: require('../../assets/atack2.jpg'), 
    dub: 'Sub English | Dub Japanese'
  },
  {
    id: '4',
    title: 'My Hero Academia',
    season: 'Season 5',
    subtitle: 'The New Power and All For One',
    remainingTime: '25m remaining',
    thumbnail: require('../../assets/boku2.jpg'), 
    dub: 'Sub English | Dub Japanese'
  },
  {
    id: '5',
    title: 'Demon Slayer: Kimetsu no Yaiba',
    season: 'Season 2',
    subtitle: 'The Entertainment District Arc',
    remainingTime: '22m remaining',
    thumbnail: require('../../assets/demon2.jpg'), 
    dub: 'Sub English | Dub Japanese'
  }
];

const ContinueWatching = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.thumbnail} style={styles.thumbnail} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.season}>{item.season} - {item.subtitle}</Text>
        <Text style={styles.remainingTime}>{item.remainingTime}</Text>
        <Text style={styles.dub}>{item.dub}</Text>
      </View>
    </View>
  );

  const renderFooter = () => {
    if (data.length > 3) {
      return (
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={styles.showMoreButton}>
          <Text style={styles.showMoreText}>{isExpanded ? 'Mostrar Menos' : 'Mostrar Mais'}</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Continue Assistindo</Text>
      <FlatList
        data={isExpanded ? data : data.slice(0, 3)}
        renderItem={renderItem} 
        keyExtractor={item => item.id}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#000', 
  },
  header: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
   showMoreButton: {
    width: '100%',
    backgroundColor: '#202020',
    marginTop: -5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  showMoreText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row', 
    marginBottom: 20, 
  },
  thumbnail: {
    width: 100, 
    height: 100, 
    borderRadius: 4,
    marginRight: 10, 
  },
  infoContainer: {
    flex: 1, 
    justifyContent: 'center', 
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  season: {
    color: 'white',
    fontSize: 12,
  },
  remainingTime: {
    color: 'white',
    fontSize: 12,
  },
  dub: {
    color: 'white',
    fontSize: 12,
  },
});

export default ContinueWatching;