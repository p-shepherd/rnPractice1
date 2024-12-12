import { StyleSheet, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState(''); 
  
  const handleInputChange = (text) => {
    setEnteredGoal(text); 
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <View style={styles.adder}>
      
      
    <TextInput style={styles.input} placeholder="Enter your goal"
    onChangeText={handleInputChange}
    value={enteredGoal}
    
    />
    <Button title="Add" onPress={addGoalHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({ adder:{
    flex: 1,
    flexDirection: 'row',
    
    justifyContent: 'space-between',
    alignItems: 'center',
  },input:{
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    width: '70%',
    marginRight: 10,
    height: 40,
  },})