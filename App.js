import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      source={require('./assets/stela.jpeg')}
      style={{width:150, Hight:150,borderRadius: 10}}
      />
      <Text style={{fontSize:30, fontWeight: 'bold'}}>Stela Bella</Text>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Stela good job</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
