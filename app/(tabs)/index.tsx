import { Image, StyleSheet, Platform , View ,Text,TextInput,FlatList} from 'react-native';
import React ,{useState} from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {

  // const [name,setName]=useState('chuks');
  // const [age,setAge]=useState(40);

  const [people,setPeople]=useState([
    {name:"chuks",age:10},
    {name:"emma",age:10},
    {name:"sam",age:10},
    {name:"tobi",age:10},
    {name:"divine",age:10},
    {name:"kelvin",age:124},
    {name:"gideon",age:10},
    {name:"favour",age:11},
    {name:"edet",age:10},
  ])
  return (
    <View style={styles.background} >
      <FlatList
      keyExtractor={(item)=>item.age}
      data={people}
      renderItem={({item})=>(
        <Text style={styles.item}>{item.name}</Text>
      )}
      
      
      
      />




      {/* {people.map((item)=>(
        <View>
          <Text>
            {item.name}
          </Text>
        </View>
      ))} */}






      {/* <Text>Enter Name:</Text>
      <TextInput style={styles.input} 
      placeholder='e.g ojieh david chukwuyenum'

      onChangeText={(val)=>setName(val)}
      
      />
      <Text>Enter :</Text>
      <TextInput style={styles.input} 
      placeholder='e.g 20'
      onChangeText={(val)=>setAge(val)}
      
      />

     <Text> name:{name},age:{age}</Text> */}
     
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
  },
  item:{
    marginTop:24,
  }
});
