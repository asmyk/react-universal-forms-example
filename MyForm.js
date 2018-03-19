import React, { Component } from 'react';
import { compose, withHandlers, withProps, withState, withStateHandlers } from "recompose";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { withFormData, withFormHandlers } from "./withFormData";

class MyForm extends Component {
    render() {
        let { formData: { name, age }, sendForm, updateFormData, formErrors } = this.props;

        return (
            <View>
                <View>
                    <TextInput
                        onChangeText={(name) => updateFormData({ name: 'name', value: name })}
                        value={name}
                    />
                    <Text>{formErrors.name}</Text>

                    <TextInput
                        onChangeText={(age) => updateFormData({ name: 'age', value: age })}
                        value={age}
                    />
                    <Text>{formErrors.age}</Text>
                </View>

                <Button onPress={(sendForm)} title="Send" style={{ width: 100, paddingTop: 20 }} />
            </View>
        )
    }
}

let isNonEmpty = (value) => (value && value.replace(/^\s+/g, '').length > 0);
let isGreatherThan = (rule) => (value) => (value > rule);

let validators = {
    "name": [[isNonEmpty, "Please enter your name"]],
    "age": [
        [isNonEmpty, "Please enter your age"],
        [isGreatherThan(17), "You should be over the age of 18"]]
}

const enhance = compose(
    withFormData({ name: 'Eric', age: '18' }),
    withFormHandlers({
        rules: validators,
        onSuccess: (props) => {
            // form is valid 
            console.log('success')
        },
        onFail: (props) => {
            // form is invalid
            console.log('fail')
        }
    })
)

const enhanced = enhance(MyForm);

export default enhanced;