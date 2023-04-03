import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Button({title, onPress, icon, style}) {
    

  return (
    <View style={style ? style : styles.container}> 
    <TouchableOpacity
      style={style? styles.iconButton : styles.button}
      onPress={onPress}
      onFocus={()=>alert('search')}
    >
      <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        colors={['#022473', '#3467E0']}
        style={style? styles.iconButton : styles.button}
      > 
        {icon ? icon : null}
        <Text style={styles.buttonTitle}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 41,
  },
  button: {
    flexDirection: 'row',
    width: screenWidth-62,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton:{
    flexDirection: 'row',
    width: screenWidth-40,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle:{
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    color: '#fff',
    margin: 10
  },
});
