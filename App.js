import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const handleInputChange = (text) => {
    setEnteredGoal(text);
  }

 const handleSubmit = () => {
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.adder}>
        <TextInput style={styles.input} placeholder="Enter your goal"
        onChangeText={handleInputChange}
        
        
        />
        <Button title="Add" onPress={handleSubmit}/>
      </View>
      <View style={styles.viewer}>
      <Text>My Goals</Text>

      <FlatList data={goals} renderItem={(itemData) => {
        
        return (
        <View style={styles.goalHolder}>
        <Text 
        key={itemData.index}
         style={styles.goalText}
        >
          {itemData.item}
          </Text>
      </View>
      );
    }}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adder:{
    flex: 1,
    flexDirection: 'row',
    
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewer:{
    flex: 5,
    
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    margin : 10,
    width: '90%',
  },
  input:{
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    width: '70%',
    marginRight: 10,
  },
  goalHolder: {
    padding: 10,
    margin: 10,
    backgroundColor: 'navy',
    borderRadius: 5,
    width: '100%',
  },
  goalText:{
    color: 'white',
  }
});
