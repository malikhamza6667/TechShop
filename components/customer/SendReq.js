import React, { useEffect, useState } from "react";
import { View,Text, TextInput, TouchableOpacity, Alert,StyleSheet, ToastAndroid } from 'react-native';
import colors from "../config/colors";
const CustomerRequest=({navigation,route})=>{
    const {reqName,Name}=route.params
    const[name,setName]=useState( Name);
    const[request,setRequest]=useState(reqName);
    const[date,setDate]=useState(new Date().toLocaleDateString());
    const[location,setLocation]=useState('Shamsabad Rwp')
    const handleRequest=()=>{
        ToastAndroid.show('posted',ToastAndroid.SHORT)
        let x = Math.floor(Math.random() * 100);
        return(
            
            Alert.alert(
                "Request Credentials",
                `Your Request Id Is ${x}`,
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => { 
                   
                  
                
                    navigation.navigate('CustomerHome')
                }
                }
                ]
              )
        )
      
     
    }
    return(
        
            
        <View style={styles.container}>
            
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={styles.title}>Tech</Text>
            <Text style={[styles.title,{color: colors.navy}]}>Shop</Text>
            </View>
          
            <Text style={[styles.title,{fontSize:20,color: colors.navy}]}>Request Form</Text>
            
            <TextInput
            style={styles.inputs}
            
            keyboardType="default"
            value={name}
            editable={false}
         //   onChangeText={setName}
            />
            <TextInput
            style={styles.inputs}
            editable={false}
            placeholderTextColor={colors.navy}
            value={request}
            />
            <TextInput
            style={styles.inputs}
            value={date}
           editable={false}
            placeholderTextColor={colors.navy}
            keyboardType="numeric"
            />
            <TextInput
            style={styles.inputs}
            value={location}
            onChangeText={setLocation}
            placeholder="Location"
            placeholderTextColor={colors.navy}
            keyboardType="default"
            />
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>{handleRequest()}}
            >
            <Text style={styles.textButton}>Comfirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>{navigation.goBack()}}
            >
            <Text style={styles.textButton}>Close</Text>
            </TouchableOpacity>
            </View>
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
export default CustomerRequest;