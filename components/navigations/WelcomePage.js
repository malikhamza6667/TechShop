import React from "react";
import { TouchableOpacity, View,Text,StatusBar,StyleSheet, Image} from "react-native";
import colors from "../config/colors";

const WelcomeScreen=({navigation})=>{
    return(
    <View style={[styles.container,{justifyContent:'center'}]}>
<StatusBar backgroundColor={colors.black} barStyle="light-content"/>
<View style={{alignSelf:'center'}}>

<Image
style={{height:100,width:100}}
source={{uri: 'data:image/png;base64,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'}}
/>
</View>
    <Text style={{fontSize:18,color:colors.navy,fontWeight:'bold',alignSelf:'center'}}>Please Select Your Category</Text>
   
  <TouchableOpacity  style={styles.button} 
    onPress={() => {
        navigation.navigate('AdminStack')  
        }}
   >
     <Text style={styles.textButton}>Admin </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button}  
  onPress={() => {
  navigation.navigate('CustomerStack')  
  }}
    >
  <Text style={styles.textButton}>Customer </Text>
  </TouchableOpacity>
  <TouchableOpacity >
  <Text style={styles.textButton}>Need Help? </Text>
  </TouchableOpacity>
    </View>

  )
}
export default WelcomeScreen;



const styles=StyleSheet.create({
    title:{
        
        marginTop:15,
        color: colors.navy,
        fontSize: 30,
        fontStyle:"italic",
        alignSelf:'center'
    },
    container:{
       padding:20,
        flex:1,
        borderRadius: 10,
        backgroundColor: colors.white,
        borderColor: colors.white,
        alignContent:'space-between',
        height: 400,
        alignContent:"space-between",
        borderColor: colors.black
    },
    inputs:{
    border:1,
    borderStyle:"solid",
    borderRadius: 15,
    borderWidth: 2,
    borderColor:colors.black,
    padding: 5,
    margin: 20,
    height:40,
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
        justifyContent:'center'
        
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