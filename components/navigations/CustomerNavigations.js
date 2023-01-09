import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing screens
import CustomerHome from '../customer/Home';
import CustomerRequest from '../customer/SendReq';
import Login from '../customer/Login';
import Register from '../customer/Register';
const stack= createNativeStackNavigator()
const CustomerStack=()=>{
    return(
<stack.Navigator initialRouteName='Login'>
<stack.Screen
name='CustomerHome'
component={CustomerHome}
options={{headerTitle:'Home', headerTitleAlign:'center'}}

/>
<stack.Screen
name='CustomerRequest'
component={CustomerRequest}
options={{headerTitle:'Post A Service Request', headerTitleAlign:'center'}}

/>
<stack.Screen
name='Login'
component={Login}
options={{headerShown:false}}

/>
<stack.Screen
name='Register'
component={Register}
options={{headerShown:false}}

/>


</stack.Navigator>
    )
}
export default CustomerStack;