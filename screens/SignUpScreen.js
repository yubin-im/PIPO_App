import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignUpScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // 여기에서 실제 회원가입 로직을 구현

        // 회원가입이 성공하면 로그인 화면으로 이동
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                keyboardType="email-address"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.signupButton}
                onPress={handleSignUp}
            >
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>

            <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
                Already have account? SIGN IN
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
    },
    signupButton: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    loginLink: {
        marginTop: 16,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});
