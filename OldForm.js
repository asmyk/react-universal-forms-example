import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

class MyForm extends Component {
    render() {
        let { formData, onSubmitForm } = this.props;
        return (
            <View>
                <TextInput value={formData.name} />

                <TextInput value={formData.email} />

                <Button onPress={onSubmitForm} title="Send" />
            </View>
        )
    }
}

let initialState = {
    name: 'Eric',
    email: 'eric@yahoo.com'
}

let enhance = compose(
    withState('formData', 'setFormData', initialState),
    withHandlers({ onSubmitForm: (props) => event => { console.log('form submitted!') } })
)

export default enhance(MyForm);