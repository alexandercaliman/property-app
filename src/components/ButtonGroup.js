import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function ButtonGroup({labels, onChange, defaultSelected}) {
  const[selected, setSelected] = useState(defaultSelected);  

  const onSelectOption = (option) => {
     setSelected(option)
     onChange(option)
  }
  return (
    <View style={styles.buttonGroup}>
      <TouchableOpacity
        style={selected == 1 ? styles.selectedButton : styles.button}
        onPress={() => onSelectOption(1)}
      >
        <Text style={selected == 1 ? styles.slectedButtonTitle : styles.buttonTitle}>{labels[0]}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={selected == 2 ? styles.selectedButton : styles.button}
        onPress={() => onSelectOption(2)}
      >
        <Text style={selected == 2? styles.slectedButtonTitle : styles.buttonTitle}>{labels[1]}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    height: 30,
    borderRadius: 15,
    borderColor: '#022473',
    borderWidth: 2,
    width: screenWidth-40,
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10
  },
  button: {
    width: '50%',
    height: 26,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle:{
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    color: '#022473',
  },
  selectedButton: {
    width: '50%',
    height: 26,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#022473',
    color: '#fff',
  },
  slectedButtonTitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    color: '#fff',
  }
});
