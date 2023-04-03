import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PropertyCard from '../../components/PropertyCard';

export default function ProperyList({navigation, route}) {

  const onCardClick = (values) => {
    navigation.navigate("Details", {propertyDetails: values})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>Properties for Sale</Text>
      <ScrollView>
        {route.params.propertyList.map((item) => 
          <PropertyCard property={item} key={item.Id} onPress={() => onCardClick(item)}/>
        )}
       </ScrollView> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  listTitle: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 20,
    margin: 20,
  },
});