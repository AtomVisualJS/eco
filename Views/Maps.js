import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';




export default function Maps() {
  return (
     
       <View style={styles.container}>  
      <MapView
        style={styles.map}
        initialRegion={{
            latitude: 43.125599,
            longitude: 5.928720,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            
            }}>
              
            <Marker
            coordinate={{
               latitude: 43.12534,
               longitude: 5.93029,
            
            }}
            title="Hôtel des arts"
            description="Lieu culturel national et de diffusion dans l’art et la culture"
            />
          
            <Marker
            coordinate={{
                latitude: 43.126221,
                longitude: 5.930812,
            }}
            title="Musée des Beaux-Arts"
            description="Musée des Beaux-Arts"
            
            />
       </MapView>
            

    </View>
   
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        alignItems: 'center',
    },
  
  map: {
    width: '100%',
    height: 800,
  
  },
});