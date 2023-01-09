import React,{useState,useEffect} from "react";
import { StyleSheet,View,Text,TextInput, FlatList, TouchableOpacity } from "react-native"
import colors from "../config/colors";
import Services from "./Services";
const CustomerHome=({navigation})=>{
   const[search,setSearch]=useState('')
   const[filteredData,setFilteredData]=useState(Services)
   useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Login')}}
        >
          <Text style={[styles.textButton,{color:'red'}]}>Log Out</Text>
        </TouchableOpacity>
      ),
    });
  }, []);
   const searchService=(text)=>{
    
    if(text==''){
        setSearch(text)
        setFilteredData(Services)
    }
    else if (text!=''){
        // console.log('called')
        const filer= Services.filter((item)=>{
           return item.SName.toLocaleLowerCase().includes(text)

            })
            setFilteredData(filer)
            setSearch(filer)      
    }

   }
    return(
        <View style={styles.container}>
          
            <View style={{flex:0.32,justifyContent:'center'}}>
           <Text style={styles.title}>Welcome Nouman!!!</Text> 
            <TextInput
            style={styles.inputs}
            keyboardType="default"
            placeholder="Search A Service"
            placeholderTextColor={colors.navy}
            value={search}
            onChangeText={(text)=>{searchService(text.toLocaleLowerCase())}}
            />  
            </View>
            <View style={{flex:0.68,borderTopWidth:1,alignItems:'center'}}>
<FlatList
data={filteredData}
showsVerticalScrollIndicator={false}
numColumns={2}
keyExtractor={(item)=>{return item.Sid}}
renderItem={({item})=>{
return(
   <View style={{
    borderRadius:20,borderWidth:1,
    shadowColor: colors.lightblue,
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowOpacity: 0.20,
    shadowRadius: 20,
    elevation: 10,
    height:150,backgroundColor:'green',margin:10,width:155,alignSelf:'center',backgroundColor:item.backGround,justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity
    // style={{}}
    onPress={()=>{navigation.navigate('CustomerRequest',{
        reqName: item.SName,
        Name: 'Nouman'
    })}}
    >

    <Text style={[styles.textButton,{color:item.color}]}>{item.SName}</Text>
    </TouchableOpacity>
   </View>
)
}}
/>
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
       //padding:20,
        flex:1,
        backgroundColor: colors.white,
        borderColor: colors.white,
        alignContent:'space-between',
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
    height:80,
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
export default CustomerHome;