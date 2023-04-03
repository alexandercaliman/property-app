import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Image, Text} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function PropertyCard({property, onPress}) {
  return (
    <View style={styles.container}> 
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image
          style={styles.image}
          source={require('../../assets/property.jpeg')}
          //source={{uri: property.FileUrl.MainPhoto + property.MainPhoto.Name}}
        />
        <Text style={styles.title}>{property.Bedrooms ? 'bed' : null} {property.Types[0] ? property.Types[0].Name : null} {property.TransactionTypeId === 1 ? 'for sale' : 'for rent' } in {property.Address.Street}, {property.Address.Town}</Text>
        <View style={styles.facilities}>
          <FontAwesome5 name="bed" size={18} color="#1A1A1A" />
          <Text style={styles.count}>{property.Bedrooms}</Text>
          <FontAwesome5 name="bath" size={18} color="#1A1A1A" />
          <Text style={styles.count}>{property.Bathrooms}</Text>
        </View>
        <Text
          style={styles.description}
          numberOfLines={3}
          ellipsizeMode='tail'
        >
          {property.Description.replace(/<\/?[^>]+(>|$)/g, "")}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{property.Price} £</Text>
        </View>
      </TouchableOpacity>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    width: screenWidth-40,
  },
  image: {
    width: screenWidth-40,
    height: 240
  },
  title: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 18,
    textAlign: 'center',
    margin: 20,
    color: "#1A1A1A"
  },
  facilities:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  count:{
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#1A1A1A",
    marginLeft: 10,
    marginRight: 20,
  },
  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    textAlign: 'justify',
    margin: 20,
    color: "#1A1A1A",
  },
  priceContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#022473'
  },
  price:{
    fontFamily: "PlayfairDisplay_400Regular",
    color: "#ffffff",
    fontSize: 18
  }

});
