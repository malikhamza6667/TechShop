import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing screens
import AdminHome from '../admin/Home';
import AdminViewRequest from '../admin/ViewReq';
import Login from '../admin/Login';
import Register from '../admin/Register';
const stack= createNativeStackNavigator()
const AdminStack=()=>{
    return(
<stack.Navigator initialRouteName='Login'>
<stack.Screen
name='AdminHome'
component={AdminHome}
options={{headerTitle:'Home', headerTitleAlign:'center'}}

/>
<stack.Screen
name='AdminViewRequest'
component={AdminViewRequest}
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
export default AdminStack;