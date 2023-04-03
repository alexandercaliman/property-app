import React, { useEffect, useState }from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, SafeAreaView, Image } from 'react-native';
import api from '../../services/api';
import PropertyDescription from '../../components/PropertyDescription';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import { FontAwesome5 } from '@expo/vector-icons';
import PropertyImages from '../../components/PropertyImages';
import PropertyMap from '../../components/PropertyMap';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Details({route}) {
  
  const [ data, setData ] = useState();
  const [ loading, setLoading ] = useState(true);

  const id = route.params.propertyDetails.Id;

  useEffect(() => {
    console.log(route.params.propertyDetails.Address)
    if( route.params.propertyDetails.TransactionTypeId === 1 ) 
      api.getSaleProperyDetails(id)
      .then((res) => {setData(res.data.data), console.log('Media :',res.data.data)})
      .then(() => setLoading(false))
      .catch((err) => console.log(err))
    else
      api.getLettingProperyDetails(id)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err))
  }, [route.params.propertyDetails])
  
  return (
    loading ? 
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#022473" />
      </View>  
      :
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <PropertyDescription data={data}/>
          <Text style={styles.sectionTitle}>Property Images</Text>
          <PropertyImages data={data}/>
          <Text style={styles.sectionTitle}>Map</Text>
          <PropertyMap
            longitude={data.Address.Longitude}
            latitude={data.Address.Latitude}
          />
          <Text style={styles.sectionTitle}>EPC</Text>
            <Image
              style={styles.epcImage}
              source={require('../../../assets/EPC.png')}
            />
          <Text style={styles.sectionTitle}>Brochure</Text>
          <Button
            icon={<FontAwesome5 name="download" size={18} color="#FFFFFF" />}
            style={styles.button}
            title="Download Brochure"
          />
          
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  epcImage: {
   alignSelf: 'center',
   width: screenWidth-40,
   height: 250
  },
  button: {
    alignSelf: 'center',
    marginBottom: 40
  },
  sectionTitle: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 20,
    margin: 20
  },
});