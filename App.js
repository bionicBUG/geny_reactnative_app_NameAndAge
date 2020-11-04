import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native';

class Inputs extends Component {
   state = {
      name: '',
      age: ''
   }
   handleName = (text) => {
      this.setState({ name: text })
   }
   handleAge = (text) => {
      this.setState({ age: text })
   }
   submit = (name, age) => {
      alert('My name is ' + name + ' and I am ' + age + ' years old.')
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "   Name"
               placeholderTextColor = "#969696"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "   Age"
               placeholderTextColor = "#969696"
               autoCapitalize = "none"
               keyboardType='numeric'
               onChangeText = {this.handleAge}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.submit(this.state.name, this.state.age)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
    backgroundColor: '#121212',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
   },
   input: {
      margin: 15,
      height: 40,
      color: '#969696',
      borderColor: '#DCDCDC',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#BB86FC',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: '#141414',
      fontWeight: 'bold',
      textAlign: 'center',
   }
})