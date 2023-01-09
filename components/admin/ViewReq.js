import React,{useState} from "react";
import { StyleSheet,View,Text,TextInput, FlatList, Alert,TouchableOpacity } from "react-native"
import colors from "../config/colors";
import Admin from "./Data";
const AdminViewRequest=({navigation})=>{
   const[search,setSearch]=useState('')
   const[filteredData,setFilteredData]=useState(Admin)
   const handleAssign=()=>{

const names=[
    {
id: 1,
name: 'Ali'
},
{
    id: 2,
    name: 'Ahmed'
    },
    {
        id: 3,
        name: 'Usman'
        },
        {
            id: 4,
            name: 'Bila'
            },
            {
                id: 5,
                name: 'Khurram'
                },
                {
                    id: 6,
                    name: 'Rahim'
                    },
                    {
                        id: 7,
                        name: 'Jaleel'
                        },
                        {
                            id: 8,
                            name: 'Hammad'
                            },
                            {
                                id: 9,
                                name: 'Adnan'
                                },
                                {
                                    id: 10,
                                    name: 'Noman'
                                    },
]
let x = Math.floor(Math.random() * 10);
    return(
            
        Alert.alert(
            "Assign Request",
            `This Request Will Be Assigned To  ${names[x].name}`,
            [
              {
                text: "Don't Assign",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Assign It", onPress: () => { 
            
                navigation.navigate('AdminHome')
            }
            }
            ]
          )
    )
   }
   const handleDelete=(id)=>{
 
    const fileter=  Admin.filter((item)=>{return item.reqname !== id})
     console.log(fileter)
     setFilteredData(fileter)
   }
   const searchService=(text)=>{
    
    if(text==''){
        setSearch(text)
        setFilteredData(Admin)
    }
    else if (text!=''){
        // console.log('called')
        const filer= Admin.filter((item)=>{
           return item.reqtype.toLocaleLowerCase().includes(text)

            })
            setFilteredData(filer)
            setSearch(filer)      
    }

   }
    return(
        <View style={styles.container}>
          
            <View style={{flex:0.32,justifyContent:'center'}}>
            <TextInput
            style={styles.inputs}
            keyboardType="default"
            placeholder="Search A Request..."
            placeholderTextColor={colors.navy}
            value={search}
            onChangeText={(text)=>{searchService(text.toLocaleLowerCase())}}
            />  
            </View>
            <View style={{flex:0.68,borderTopWidth:1,alignItems:'center'}}>
<FlatList
data={filteredData}
showsVerticalScrollIndicator={false}
keyExtractor={(item)=>{return item.reqid}}
renderItem={({item})=>{
return(
   <View style={{
    borderRadius:20,borderWidth:1,
    shadowColor: colors.white,
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowOpacity: 0.20,
    shadowRadius: 20,
    elevation: 10,
    height:300,margin:10,width:350,alignSelf:'center',backgroundColor:colors.white,justifyContent:'center',alignItems:'center'}}>
    <Text style={styles.textButton}>Requester Name : {item.reqname}</Text>
    <Text style={styles.textButton}>Type : {item.reqtype}</Text>
    <Text style={styles.textButton}>Data : {item.reqdate}</Text>
   <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity
     style={styles.button}
    onPress={()=>{handleAssign()}}
    >
<Text style={styles.textButton}>Assign</Text>
    </TouchableOpacity>
    <TouchableOpacity
     style={styles.button}
    onPress={()=>{handleDelete(item.reqname)}}
    >
<Text style={styles.textButton}>Delete</Text>
    </TouchableOpacity>

   </View>
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
        
        marginTop:20,
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
        width: 100,
        margin:20,
        
    },
    textButton:{
    margin:5,
    padding:5,
    alignSelf:'center',
    color: colors.navy,
    fontSize: 20,
    fontWeight:"bold"
    }
})
export default AdminViewRequest;