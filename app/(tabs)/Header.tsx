import React ,{useState} from 'react';

import { Image, StyleSheet, Platform , View ,Text,TextInput,FlatList} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header:{
    marginTop:10,
    height:90,
    paddingTop:38,
    backgroundColor:'coral'
  },
  title:{
    textAlign:'center',
    color:'#fff',
    fontSize:30,
    fontWeight:'bold'

  }

})

