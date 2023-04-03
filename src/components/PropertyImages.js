import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function PropertyImages({data}) {
    

  return (
    <View style={styles.container}> 
      {data.Media.map((item, index) => 
        item.TypeId === 1 ?
        <Image
          style={index < 2 ? styles.bigImage : styles.smallImage}
          source={require('../../assets/property.jpeg')}
          // source={{
          //   uri: data.FileUrl[1] + item.Data,
          // }}
        />
        : 
        null
      )}
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    width: screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  bigImage: {
    width: screenWidth-40,
    height: 200,
    margin: 10
  },
  smallImage: {
    width: screenWidth/2-30,
    height: 100,
    margin: 10
  }
});
