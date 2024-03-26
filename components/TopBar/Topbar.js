// TopBar.js

import { View, StyleSheet, TouchableOpacity, Text, StatusBar, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Fontisto';


const TopBar = ({ onMenuPress }) => (
  <View style={styles.topBar}>
    <StatusBar backgroundColor="#202020" barStyle="light-content" />
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBarContent}>
      <TouchableOpacity style={styles.icon4} onPress={onMenuPress}>
    <Icon name="menu" size={25} color="#FFF" />
  </TouchableOpacity>
        <View style={styles.logoContainer}>
          <TouchableOpacity>
            <Icon3 name="react" size={22} color="#FF8C00" />
          </TouchableOpacity>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.icon}>
            <Icon2 name="crown" size={22} color="#FFD700" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="search" size={25} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="person-outline" size={25} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  topBar: {
    justifyContent: 'center',
    backgroundColor: '#202020',
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1000,
    height: 50,
    top: 25
  },
  safeArea: {
    width: '100%',
  },
  topBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    paddingHorizontal: 10,
  },
  logoContainer: {
    flex: 1,
    
  },
  iconsContainer: {
    flexDirection: 'row',
    
  },
  icon: {
    marginHorizontal: 10,
  },
  icon4: {
    marginRight: 15,
  },
  
});

export default TopBar;
