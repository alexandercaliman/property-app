import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';

import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import Select from '../../components/Select';

import api from '../../services/api';

import { salesPrice, lettingsPrice, bedrooms } from '../../constants/constants';

export default function Search({navigation}) {
  
  const [ type, setType ] = useState(1);
  const [ locations, setLocations ] = useState([]);
  const [ locationTypes, setLocationTypes ] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getLocations({'transaction-type' : type})
    .then((res) => setLocations(res.data.data.Data))
    .then(() => {
      if(locationTypes.length > 0) setLocationTypes([])}
    )
    .finally(() => setLoading(false))
    .catch((err) => console.log(err))
  }, [type]);

  useEffect(() => {
    api.getPropertyTypes({'transaction-type' : type})
    .then((res) => res.data.data.Data.map((item) => setLocationTypes(locationTypes => [...locationTypes, item])))
    .catch((err) => console.log(err))
  }, [type]);

  const  onSearchLocations = (values) => {
    if (type === 1) {
      api.getSales({ values })
      .catch((err) => console.log(err))
      .then((res) => {
        if (res.data.data.Data.length > 0)
          navigation.navigate('PropertyList', {
            propertyList: res.data.data.Data,
        })
      })
    }
    else {
      api.getLettings({values})
      .catch((err) => console.log(err))
      .then((res) => {
        if (res.data.data.Data.length > 0)
          navigation.navigate('PropertyList', {
            paramKey: res.data.data.Data,
        })
      })
    }  
   };

  return (
    
      loading ? 
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#022473" />
        </View>
        :
        <Formik
        initialValues={{
          expand: "MainPhoto,Address,Types",
          location: "",
          type: "",    
       }}
        onSubmit={values => onSearchLocations(values)}
      >
     {({ handleChange, handleBlur, setFieldValue, handleSubmit, values , resetForm}) => (
       <View style={styles.container}>
       <ScrollView>
       <ButtonGroup
         labels={["Sales", "Lettings"]}
         onChange={(value) => {
           setType(value), 
           resetForm()
          }
        }
         defaultSelected={type}
       />
       <Select
         type={type}
         label="Location"
         placeholder="All"
         options={locations}
         onChange={(item) => setFieldValue('location', item)}
       />
       <Select
         type={type}
         label={type === 1 ? "Max Price" : "Max Price (per month)"}
         placeholder="No Max"
         options={type === 1 ? salesPrice : lettingsPrice}
         onChange={(item) => setFieldValue('max-price', item)}
       />
       <Select
         type={type}
         label="Type"
         placeholder="Any"
         options={locationTypes}
         multiselect={true}
         onChange={(values)=> setFieldValue('type', values.join(','))}
       />
       <Select
         type={type}
         label="Bedrooms"
         placeholder="Studio +"
         options={bedrooms}
         onChange={(item) => setFieldValue('min-bed', item)}
       />
       
     </ScrollView>
     <Button
          title={'Search'}
          onPress={handleSubmit}
        />
     </View>
     )}
   </Formik>
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
    alignItems: 'center',
    flexDirection: 'column'
  }
});
