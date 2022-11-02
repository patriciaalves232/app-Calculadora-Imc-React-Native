import React from 'react';
import { StyleSheet,View } from 'react-native';
import Title from './src/componets/Title';
import Main from './src/componets/Main';


export default function () {
  return (
    <View style={styles.container}>
     <Title/>
     <Main/>
  
    
     </View>
  );
}
const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:88,  
  },
});
