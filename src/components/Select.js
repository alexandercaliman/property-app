import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Modal, FlatList } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useEffect } from 'react/cjs/react.development';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Select({label, placeholder, onChange, options, multiselect, type}) {

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState();
  const [values, setValues] = useState([]);
  const [valuesId, setValuesId] = useState([]);

  useEffect(() => {
    setValue(),
    setValues([]),
    setValuesId([])
  }, [type])

  const Item = ({ title, value }) => (
    <View >
      <TouchableOpacity onPress={() => onSelect(title, value)}>
        <View style={styles.selectItemButton}>
          <Text style={styles.selectItemName}>{title}</Text>
          {title === value || values.includes(title)? 
          <MaterialIcons
            name="done"
            size={30}
            color="#00000099"
          />
          :
          <Text></Text>
          }
        </View>    
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    multiselect ? 
      <Item title={item.Name} value={item.Id}/>
    :  
       <Item title={item} />
  );

  const saveSelection = () =>{
    setVisible(false)
  };

  const onSelect = (item, value) => {
    let list=[]
    if (multiselect) {
      if(values.includes(item)){
        if (values.length > 0) {
          const removeIndex = values.indexOf(item);
          setValues(values.filter((item, index) => index !== removeIndex));
          setValuesId(valuesId.filter((item, index) => index !== removeIndex))
          onChange(valuesId.filter((item, index) => index !== removeIndex))
        }
      }
      else{
        setValues(values => [...values, item])
        setValuesId(valuesId => [...valuesId, value])
        onChange([...valuesId, value])
      }   
    }
    else{
      setValue(item)
      onChange(item)
      setVisible(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputField}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setVisible(true)}
        >
          {value || values.length > 0 ?
            <Text style={styles.value}>{multiselect ? values.map((item, index) => values.length - index === 1 ? item + '. ' : item + ', ') : value }</Text>
            :
            <Text style={styles.value}>{placeholder}</Text>
          }
          <Entypo name="chevron-down" size={15} color="#00000099" />
        </TouchableOpacity>
        <Modal 
          animationType="fade"
          transparent={true}
          visible={visible}
        >
          <View style={styles.modal}>
            <View style={styles.modalCard}>
              <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeButton}>
                <Fontisto name="close-a" size={15} color="#00000099" style={{margin: 15}}/>
              </TouchableOpacity>
              <FlatList
                style={styles.optionsList}
                data={options}
                renderItem={renderItem}
                keyExtractor={item => multiselect ? item.Name : item}
              />
              {multiselect ? 
                <TouchableOpacity style={styles.saveButton} onPress={() => saveSelection()}>
                  <Text style={styles.saveButtonTitle}>Save</Text>
                </TouchableOpacity>
                :
                null
              }
            </View>
          </View>
        </Modal>
      </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 10,
  },
  label: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
  },
  inputField: {
    width: screenWidth-62,
    minHeight: 56,
    borderRadius: 28,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#191919',
    marginTop: 5,
    
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  value:{
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    color: '#00000099',
  },
  modal:{
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalCard:{
    backgroundColor: "#fff",
    maxHeight: screenHeight/2,
    width: screenWidth-40,
    borderRadius: 15
  },
  modalContent:{
    alignItems: 'center', 
    justifyContent: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  optionsList: {
    marginVertical: 10
  },
  selectItem: {
    marginVertical: 1,
  },
  selectItemButton: {
    marginHorizontal: 10,
    height: 40,
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectItemName: {
    fontFamily: "Poppins_400Regular",
    color: "#00000099",
    fontSize: 24
  },
  selectIconHide: {
    display: 'none'
  },
  saveButton:{
    margin: 10,
    alignSelf: 'center',
    width: 100,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#022473',
    justifyContent: 'center',
    alignItems: 'center'
  },
  saveButtonTitle:{
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    color: '#fff'
  }
});
