import  React from 'react';

//importing screens
import { View } from 'react-native';
import MainStack from './components/navigations/MainAppNavigations';

const App=()=>{
    return(
      <View style={{flex:1}}>

<MainStack/>
      </View>
    )
}
export default App;