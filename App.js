import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [goals, setGoals] = useState([]);

 
  const handleSubmit = (enteredGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, key: Math.random().toString() }, 
    ]);
    
  };

  return (
    <SafeAreaView style={styles.container}>
   
      <GoalInput onAddGoal={handleSubmit}  />
      <View style={styles.viewer}>
      <Text>My Goals</Text>

      <FlatList
  data={goals}
  renderItem={({ item }) => {
    return <GoalItem text={item.text} key={item.key} />;
  }}
  keyExtractor={(item) => item.key}
/>
    </View>
   
    </SafeAreaView>
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
 
  viewer:{
    flex: 5,
    
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    margin : 10,
    width: '90%',
  },
  

});
