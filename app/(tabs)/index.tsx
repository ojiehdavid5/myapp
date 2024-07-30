import { Image, StyleSheet, Platform , View ,Text,TextInput,FlatList} from 'react-native';
import React ,{useState} from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Header from './Header'
import Todoitem from '../../components/Todoitem'
import Addtodo from '../../components/addTodo'

export default function HomeScreen() {
const [todos,setTodos]=useState([
  {text:"Buy coffe",key:'1'},
  {text:"Buy coffe",key:'2'},
  {text:"Buy coffe",key:'3'},
  {text:"Buy coffe",key:'4'},
  {text:"Buy coffe",key:'5'}
])

const pressHandler=(key)=>{
  setTodos((prevTodos)=>{
    return prevTodos.filter(todos=>todos.key!= key)
  })
}


const submitHandler=(text)=>{
  setTodos((prevTodos)=>{
    return[
      {text:text,key:Math.random().toString()},
      ...prevTodos
    ]
  })
}

  return (
    <View style={styles.container} >
      <Header/>
      <View style={styles.content }>
        <Addtodo submitHandler={submitHandler}/>
        <View style={styles.list}>
        <FlatList
      data={todos}
      renderItem={({item})=>(
        <Todoitem item={item} pressHandler={pressHandler}/>
        

      )}
      
      
      
      />

        </View>
      </View>



     
    </View>
    
  )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',

  },

  content:{
    padding:4
  },
  list:{
    marginTop:20
  }


});
