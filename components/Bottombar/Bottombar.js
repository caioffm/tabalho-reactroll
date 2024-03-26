// BottomBar.js

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Certifique-se de ter instalado esta biblioteca

const BottomBar = () => (
  <View style={styles.bottomBar}>
    <View style={styles.menuSection}>
      <Text style={styles.menuTitle}>Inicio</Text>
      <Text style={styles.menuItem}>Recentemente adicionados</Text>
      <Text style={styles.menuItem}>Recomendado para você</Text>
      <Text style={styles.menuItem}>Continuar assistindo</Text>
    </View>

    <View style={styles.crunchyrollSection}>
      <Text style={styles.menuTitle1}>Crunchyroll</Text>
      <Text style={styles.menuItem}>Sobre</Text>
      <Text style={styles.menuItem}>Ajuda/FAQ</Text>
    </View>
   
      <Text style={styles.menuTitle2}>Contate-nos</Text>
      <View style={styles.socialSection}>
      <Icon name="youtube" style={styles.socialIcon} />
      <Icon name="facebook" style={styles.socialIcon} />
      <Icon name="twitter" style={styles.socialIcon} />
      <Icon name="instagram" style={styles.socialIcon} />
      </View>
    
    <Text style={styles.copyRightText}>© ReactRoll</Text>
  </View>
);

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: '#202020', 
    padding: 10,
    
  },
  menuSection: {
    // Seção de navegação
  },
  socialSection: {
    flexDirection: 'row', 
    justifyContent: 'center', 
  },
  crunchyrollSection: {
    
  },
  menuTitle: {
    marginLeft: 20, 
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  menuTitle1: {
    marginTop: 20,
    marginLeft: 20, 
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  menuItem: {
    marginLeft: 20,
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  
  copyRightText: {
    color: 'white',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
  },
  menuTitle2: {
   textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  socialIcon: {    
    fontSize: 24,
    color: 'white',
    marginHorizontal: 10, 
    
  },
});

export default BottomBar;
