import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import { styles } from './src/themes/estilos';

export default function App() {
  return (
    <View style={styles.fondo}>
      <CalculadoraScreen />
    </View>
  );
}


