import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Logo({ navigation }) {
    const handleLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Image source={require('./pipo_logo.jpg')} style={styles.logo} />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>시작하기</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 500,
        height: 500,
        marginBottom: 16,
    },
    loginButton: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
