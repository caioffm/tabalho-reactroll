import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Alert, BackHandler } from 'react-native';

const MenuBar = ({ onOptionSelect }) => {
  const handleExit = () => {
    Alert.alert(
      'Confirmar saída',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', onPress: () => handleExitApp() },
      ],
      { cancelable: false }
    );
  };

  const handleExitApp = () => {
    if (Platform.OS === 'android') {
      BackHandler.exitApp(); 
    } else {
     
    }
  };

  return (
    <View style={styles.menuBar}>
      <TouchableOpacity style={styles.menuItem} onPress={() => onOptionSelect('portfolio')}>
        <Text style={styles.menuText}>Portfólio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => onOptionSelect('recent')}>
        <Text style={styles.menuText}>Recentes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => onOptionSelect('recommended')}>
        <Text style={styles.menuText}>Recomendado</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => onOptionSelect('continue_watching')}>
        <Text style={styles.menuText}>Continuar Assistindo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem2} onPress={handleExit}>
        <Text style={styles.menuText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuBar: {
    position: 'absolute',
    top: 37,
    bottom: 0,
    left: 0,
    width: 170,
    height: 500,
    backgroundColor: '#202020',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuItem2: {
    paddingVertical: 15,
    marginTop: 190,
  },
  menuText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default MenuBar;
