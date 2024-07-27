import { Image, StyleSheet, Platform , View ,Text,TextInput} from 'react-native';
import React ,{useState} from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {

  const [name,setName]=useState('chuks');
  const [age,setAge]=useState(40);

  return (
    <View style={styles.background} >
      <Text>Enter Name:</Text>
      <TextInput style={styles.input} 
      placeholder='e.g ojieh david chukwuyenum'
      onChangeText={(val)=>setName(val)}
      
      />
      <Text>Enter Name:</Text>
      <TextInput style={styles.input} 
      placeholder='e.g 20'
      onChangeText={(val)=>setAge(val)}
      
      />

     <Text> name:{name},age:{age}</Text>
     
    </View>
  )

}

const styles = StyleSheet.create({
  background: {
    backgroundColor:"white",
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:20,
    width:200
  }
});
