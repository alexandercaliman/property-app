import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Splash() {
  return(
    <LinearGradient
        colors={['#022473', '#3467E0']}
        style={styles.container}
      >
        <Image
          style={styles.image}
          source={require('../../../assets/olympusLogo_white.png')}
        />
    </LinearGradient>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: screenWidth - 100,  
    maxHeight: 72  
  }
});
