import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      source={require('./assets/IMG_1822.jpg')}
      style={{width:100, Hight:100, borderRadius: 75}}
      />
      <Text style={{fontSize:30, fontWeight: 'bold'}}> stela Bella</Text>
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
