import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../screens/splash/Splash';
import Search from '../screens/search/Search';
import ProperyList from '../screens/list/PropertyList';
import Details from '../screens/details/Details';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ height: 68, width: 274, marginTop:16, borderColor: "#fff"}}
      source={require('../../assets/olympusLogo_blue.png')}
    />
  );
}

export default Navigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Search"}>
         <Stack.Screen
           name="Search"
           component={Search}
           options={{
             headerStyle:{
               height: 150,
               elevation: 0,
  	           shadowOpacity: 0,
               borderBottomWidth: 0
             },
             headerTitle: props => <LogoTitle {...props} />,
           }}
           />
           <Stack.Screen
           name="Splash"
           component={Splash}
           options={{
             headerShown: false
           }}
           />
           <Stack.Screen
             name="PropertyList"
             component={ProperyList}
             options={{
              headerBackTitleVisible: false,
              headerTintColor: '#022473',
              headerStyle:{
                height: 150,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0
            },
            headerTitle: props => <LogoTitle {...props} />,
           }}
           />
           <Stack.Screen
             name="Details"
             component={Details}
             options={{
              headerBackTitleVisible: false,
              headerTintColor: '#022473',
              headerStyle:{
                height: 150,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0
            },
            headerTitle: props => <LogoTitle {...props} />,
           }}
           />
      </Stack.Navigator>  
    </NavigationContainer>
  )
};
