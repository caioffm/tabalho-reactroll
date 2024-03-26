import React, { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import TopBar from './components/TopBar/Topbar';
import BottomBar from './components/Bottombar/Bottombar';
import ContinuarAssistindo from './components/ContinuarAssistindo/ContinuarAssistindo';
import Portfolio from './components/Portifolio/Portfolio';
import RecomendadoParaVoce from './components/RecomendadoParaVoce/RecomendadoParaVoce';
import RecentementeAdicionados from './components/RecentementeAdicionados/RecentementeAdicionados';
import MenuBar from './components/MenuBar/MenuBar';

const App = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const scrollViewRef = useRef();

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const scrollToSection = (section) => {
    let posY;
    switch (section) {
      case 'portfolio':
        posY = 0;
        break;
      case 'recent':
         posY = 475;
        break;
      case 'recommended':
         posY = 875;
        break;
      case 'continue_watching':
         posY = 1225;
        break;
      default:
        break;
    }
    scrollViewRef.current.scrollTo({ y: posY, animated: true });
  };

  const handleOutsidePress = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <TopBar onMenuPress={handleMenuToggle} />
      <Modal
        visible={isMenuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsMenuVisible(false)}
      >
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={styles.menuContainer}>
            <MenuBar onOptionSelect={scrollToSection} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <ScrollView ref={scrollViewRef} style={styles.content}>
        <Portfolio />
        <RecentementeAdicionados />
        <RecomendadoParaVoce />
        <ContinuarAssistindo />
        <BottomBar />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  content: {
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default App;
