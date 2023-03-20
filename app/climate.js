import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import climateImage from '../assets/images/climate.png';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useState } from 'react';

const ClimateScreen = () => {
  const router = useRouter();

  const [temperature, setTemperature] = useState(68);
  const [climateOn, setClimateOn] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={climateImage} style={styles.image} resizeMode='contain' />

      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name='chevron-left' size={24} color='white' />
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.label}>Interior 74°F - Exterior 66°F</Text>
        <View style={styles.controlsRow}>
          <Pressable style={styles.iconButtonContainer} onPress={() => setClimateOn(!climateOn)}>
            <MaterialCommunityIcons name='power' size={42} color={climateOn ? 'white' : 'gray'} />
            <Text style={styles.iconButtonText}>{climateOn ? 'On' : 'Off'}</Text>
          </Pressable>

          <View style={styles.temperatureContainer}>
            <Entypo name='chevron-left' size={30} color='gray' onPress={() => setTemperature(temperature - 1)} />
            <Text style={styles.temperatureText}>{temperature}°</Text>
            <Entypo name='chevron-right' size={30} color='gray' onPress={() => setTemperature(temperature + 1)} />
          </View>

          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons name='car-door' size={42} color='gray' />
            <Text style={styles.iconButtonText}>Vent</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ClimateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161818',
  },
  image: {
    width: '100%',
    height: '65%',
  },
  back: {
    position: 'absolute',
    top: 50,
    left: 25,
    backgroundColor: '#2f3030',
    padding: 10,
    borderRadius: 5,
  },
  footer: {
    alignItems: 'center',
    padding: 12,
    marginBottom: 20,
    marginTop: 'auto',
  },
  label: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  iconButtonContainer: {
    alignItems: 'center',
  },
  iconButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 20,
  },
});
