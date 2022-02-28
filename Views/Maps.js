import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import HeaderBar from './HeaderBar';



export default function Maps() {
  return (
     
       <View style={styles.container}>  
      <MapView
        style={styles.map}
        initialRegion={{
            latitude: 43.12534,
            longitude: 5.93029,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            zoom: 5
            }}
        />
            <MapView.Marker
            coordinate={{
               latitude: 43.12534,
               longitude: 5.93029,
            
            }}
            title="Montreal"
            description="This is the best city in the world!"
            />

    </View>
   
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
    },
  
  map: {
    width: '100%',
    height: 700,
  
  },
});