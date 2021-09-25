import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Picker from 'react-native-community/picker';

const FOODS = [
  'work',
  'home',
  'friends',
  'travel',
  'health'
]

const PositiveForm = () => {
  const [value, setValue] = useState("work");
  return (
    <View style={styles.container}>
     <Text>Selected: {value} </Text>
      <Picker
        selectedValue={value}
        onValueChange={itemValue =>
          setValue(itemValue)
        }>
        {FOODS.map(food => (
          <Picker.Item label={food} value={food} /> 
        ))}
      </Picker>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default PositiveForm;