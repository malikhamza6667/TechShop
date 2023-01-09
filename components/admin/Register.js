import React, { useEffect, useState } from "react";
import { View,Text, TextInput, TouchableOpacity, Alert,StyleSheet } from 'react-native';
import colors from "../config/colors";

const Register=({navigation})=>{
    const[name,setName]=useState("Enter Your Name");
    const[email,setEmail]=useState('');
    const[ph,setPh]=useState();
    const[dob,setDob]=useState();
    const[password,setPassword]=useState('');
    const SignUp=async()=>{
        if(!(email||password)){Alert.alert('fill all fields')
    return}
        else{
            navigation.navigate('CustomerHome',{
                name,
            })
        }

        
    }
    
    
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={styles.title}>Tech</Text>
            <Text style={[styles.title,{color: colors.navy}]}>Shop</Text>
            </View>
          
            <Text style={[styles.title,{fontSize:20,color: colors.navy}]}>Login</Text>
            <TextInput
            style={styles.inputs}
            keyboardType="default"
            value={name}
            onChangeText={setName}
            />
            <TextInput
            style={styles.inputs}
            keyboardType="email-address"
            placeholderTextColor={colors.navy}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Email"
            
            />
            <TextInput
            style={styles.inputs}
            value={ph}
            onChangeText={setPh}
            placeholder="Enter Your Phone No"
            placeholderTextColor={colors.navy}
            keyboardType="numeric"
            />
            <TextInput
            style={styles.inputs}
            value={dob}
            onChangeText={setDob}
            placeholder="Enter Your Designation i.e Technician"
            placeholderTextColor={colors.navy}
            keyboardType="default"
            />
            <TextInput
            style={styles.inputs}
            keyboardType="default"
            secureTextEntry={true}
            value={password}
            placeholder="Enter Password"
            placeholderTextColor={colors.navy}
            onChangeText={setPassword}
            
            />
            <TouchableOpacity
            style={styles.button}
            onPress={()=>SignUp()}
            >
            <Text style={styles.textButton}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
        style={{alignSelf:"center"}}
        onPress={()=> {navigation.goBack()}}
        >
            <Text style={{fontWeight:"bold",color:colors.navy}}>Already Registered?</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    title:{
        
        marginTop:15,
        color: colors.red,
        fontSize: 30,
       // fontStyle:"italic",
        alignSelf:'center'
    },
    container:{
       padding:20,
        flex:1,
        justifyContent:'center',
        borderRadius: 10,
        backgroundColor: colors.white,
        borderColor: colors.white,
        alignContent:'space-between',
       
        height: 400,
        borderColor: colors.black
    },
    inputs:{
    border:1,
    borderStyle:"solid",
    borderRadius: 15,
    borderWidth: 2,
    borderColor:colors.black,
    padding: 10,
    margin: 20,
    height:60,
    color: colors.navy,
    backgroundColor: colors.white
    },
    button:{
        
        height:50,
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderColor: colors.black,
        borderWidth: 2,
        border:1,
        borderRadius: 15,
        width: 150,
        margin:20,
        
    },
    textButton:{
    margin:5,
    padding:5,
    alignSelf:'center',
    color: colors.navy,
    fontSize: 15,
    fontWeight:"bold"
    }
})
export default Register;