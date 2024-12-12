import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GoalItem(props) {
  return (
    <View style={styles.goalHolder}>
        <Text 
         style={styles.goalText}
         
        >
          {props.text}
          </Text>
      </View>
  )
}

const styles = StyleSheet.create({

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
})