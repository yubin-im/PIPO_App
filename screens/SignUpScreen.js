import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignUpScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // 여기에서 실제 회원가입 로직을 구현하세요.
        // 예를 들어, 서버로 사용자 정보를 전송하고 회원가입을 처리하는 로직을 추가하세요.

        // 회원가입이 성공하면 로그인 화면으로 이동합니다.
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>이름:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
            />

            <Text style={styles.label}>이메일:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                keyboardType="email-address"
            />

            <Text style={styles.label}>패스워드:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
            />

            <Text style={styles.label}>패스워드 확인:</Text>
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
                <Text style={styles.buttonText}>회원가입</Text>
            </TouchableOpacity>

            <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
                이미 계정이 있으신가요? 로그인
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
