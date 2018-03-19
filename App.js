import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyForm from "./MyForm";

export default class App extends React.Component {
  handleSubmitForm(formData) {
    console.log(formData)
  }
  render() {
    return (
      <View style={styles.container}>
        <MyForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
