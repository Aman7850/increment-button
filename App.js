import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Button, Card, Modal, Portal, TextInput, Avatar, Searchbar, Provider} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

const App = () => {
  const [num, setNum]= useState(0);

  const incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  const decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 const handleChange = (e)=>{
   setNum(e.target.value);
  }
  
    return(
     <View style={styles.container}>
          <Animatable.View style={{flexDirection: 'row'}} animation='zoomIn' duration={3000}>
            <Button mode="contained" labelStyle={{fontSize: 30, textAlign: 'center'}} onPress={decNum}>-</Button>
            <TextInput outlineColor='transparent' style={{textAlign: 'center', width: '14%'}} value={num.toString()} onChange={handleChange}></TextInput>
            <Button  mode="contained" labelStyle={{fontSize: 30, textAlign: 'center'}} onPress={incNum}>+</Button>
          </Animatable.View>
     </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: 'skyblue'
  },
 
});

export default App;