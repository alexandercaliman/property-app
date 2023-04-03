import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function PropertyDescription({data}) {
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/property.jpeg')} resizeMode="cover" style={styles.image}>
        <View style={styles.card}>
          <Text style={styles.cardText}>{data.Bedrooms ? data.Bedrooms + ' bed' : null} {data.Types[0] ? data.Types[0].Name : null} {data.TransactionTypeId === 1 ? 'for sale' : 'for rent' } in {data.Address.Street}, {data.Address.Town}</Text>
        </View>
      </ImageBackground>
      <LinearGradient
        start={{x: 0.0, y: 0.1}} end={{x: 1.0, y: 1.1}}
        colors={['#022473', '#042677', '#3467E0']}
        style={styles.iconsGroup}
      > 
        <View style={styles.icon}>
          <FontAwesome5 name="images" size={23} color="#FFFFFF" />
          <Text style={styles.iconText}>Images</Text>
        </View>
        <View style={styles.icon}>
          <FontAwesome5 name="map" size={23} color="#FFFFFF" />
          <Text style={styles.iconText}>Map</Text>
        </View>
        <View style={styles.icon}>   
          <FontAwesome5 name="chart-bar" size={23} color="#FFFFFF" />
          <Text style={styles.iconText}>EPC</Text>
        </View> 
        <View style={styles.icon}>
          <FontAwesome5 name="file-pdf" size={23} color="#FFFFFF" />
          <Text style={styles.iconText}>Brochure</Text>
        </View>     
      </LinearGradient>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>£ {data.Price}</Text>
        <View style={styles.facilities}>
          <FontAwesome5 name="bed" size={18} color="#1A1A1A" />
          <Text style={styles.facilitiesCount}>{data.Bedrooms}</Text>
          <FontAwesome5 name="bath" size={18} color="#1A1A1A" />
          <Text style={styles.facilitiesCount}>{data.Bathrooms}</Text>
        </View> 
      </View>  
      <Text
          style={styles.description}
        >
          {data.Description.replace(/<\/?[^>]+(>|$)/g, "")}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  image: {
    width: screenWidth,
    height: screenHeight/4,
    justifyContent: 'center',
  },
  card: {
    backgroundColor:'rgba(2,36,115,0.5)',
    height: screenHeight/4,
    justifyContent: 'center',
    width: screenWidth,
  },
  cardText:{
    alignSelf: 'center',
    color: "#FFFFFF",
    width: screenWidth-40,
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 24,
    textAlign: 'center',
    position: 'relative',
    top: 0.4,
  },
  backgroundColor: {
    height: screenHeight/4,
  },
  iconsGroup: {
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon: {
    flexDirection: 'row',
  },
  iconText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    marginHorizontal: 5
  },
  priceContainer: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  price:{
    fontFamily: "PlayfairDisplay_400Regular",
    color: "#022473",
    fontSize: 20
  },
  facilities:{
    width: 78,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  facilitiesCount: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#1A1A1A",
  },
  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    textAlign: 'left',
    marginHorizontal: 20,
    color: "#1A1A1A",
  },

});
