import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

export default function LoginScreen({navigation}) {
    const [name, setName] =  React.useState('')

    const Continue = () => {
        navigation.navigate('Chat', {name: name})
    }

    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
