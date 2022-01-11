import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import logo from '../public/image/logo2.png'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
    container: {
        padding: 40
    },
    headerLogin: {
        textAlign: 'center',
        padding: 40,
        fontSize: 30,
    },
    formInput: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 0,
        borderColor: 'red',
        borderBottomWidth: 1
    },
    image: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    icon: {
        marginRight: 15,
        color: '#ffce9f'
    },
    textForgot: {
        textAlign: 'right',
        marginTop: 10
    }
})
function LoginScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={{uri: 'https://i.ibb.co/9tsGjDd/logo2.png'}} style={{width: 150, height: 65}} />
            </View>
            <View style={styles.formInput}>
                <Fontisto name="email" style={styles.icon} size={20} />
                <TextInput
                    placeholder="abc@mail.com"
                    autoFocus={true}
                    placeholderTextColor="#ffce9f"
                />
            </View>
            <View style={styles.formInput}>
                <Fontisto name="locked" style={styles.icon} size={20} />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#ffce9f"
                />
            </View>
            <TouchableOpacity >
                <Text style={styles.textForgot} onPress={() => navigation.navigate('Home')}>Forgot Password</Text>
            </TouchableOpacity>
        </View>
    )
}

LoginScreen.propTypes = {

}

export default LoginScreen

