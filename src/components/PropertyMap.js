import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function PropertyMap({longitude, latitude}) {
    

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          longitude: longitude,
          latitude: latitude,
          longitudeDelta: 0.001,
          latitudeDelta: 0.002
        }}
      >
        <Marker
          coordinate={{ latitude : latitude , longitude : longitude }}
        >
          <FontAwesome5 name="map-marker-alt" size={24} color="red" />
        </Marker>
      </MapView>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'  
  },
  map: {
    width: screenWidth-40,
    height: 196
  }  
});
