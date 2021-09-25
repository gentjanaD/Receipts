import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, StyleSheet, Button, ScrollView} from 'react-native'
const PositiveForm = () => {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumer] = useState(null);
  return (
  <SafeAreaView>
    <ScrollView>
      <Text>form</Text>
      <TextInput
        style={styles.input}
        keyboardType="default"
        onChangeText={onChangeText}
        placeholder={'Category'}
        value={text}
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        onChangeText={onChangeText}
        placeholder={'Title'}
        value={text}
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        onChangeText={onChangeText}
        placeholder={'Date'}
        value={text}
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        onChangeText={onChangeText}
        placeholder={'Person'}
        value={text}
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        onChangeText={onChangeText}
        placeholder={'Location'}
        value={text}
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        onChangeText={onChangeText}
        placeholder={'What Happened'}
        value={text}
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        onChangeText={onChangeText}
        placeholder={'How did you feel?'}
        value={text}
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        onChangeText={onChangeText}
        placeholder={'Has this happened before?'}
        value={text}
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        onChangeText={onChangeText}
        placeholder={'What would you do differently'}
        value={text}
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        onChangeText={onChangeText}
        placeholder={'Would you like to share this with someone?'}
        value={text}
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        onChangeText={onChangeText}
        placeholder={'What have you learned?'}
        value={text}
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        onChangeText={onChangeText}
        placeholder={'What is the plan moving forward?'}
        value={text}
      />
    <Button
        title="Submit Form"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        title="Cancel"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default PositiveForm; 