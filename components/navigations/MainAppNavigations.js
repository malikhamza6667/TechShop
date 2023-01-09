import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing screens
import WelcomeScreen from './WelcomePage';
import CustomerStack from './CustomerNavigations';
import AdminStack from './AdminNavigations';
const stack= createNativeStackNavigator()
const MainStack=()=>{
    return(
        <NavigationContainer>

<stack.Navigator initialRouteName='WelcomeScreen'
screenOptions={{headerShown:false}}
>
<stack.Screen
name='CustomerStack'
component={CustomerStack}

/>
<stack.Screen
name='AdminStack'
component={AdminStack}

/>
<stack.Screen
name='WelcomeScreen'
component={WelcomeScreen}
options={{headerShown:true,headerTitle:'Welcome Buddy!!!', headerTitleAlign:'center'}}

/>

</stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack;