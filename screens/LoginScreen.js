import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // 여기에서 실제 로그인 로직을 구현하세요.
        // 예를 들어, 서버로 아이디와 비밀번호를 보내고 유효성을 확인하는 로직을 추가하세요.

        // 로그인이 성공하면 대시보드 화면으로 이동합니다.
        navigation.navigate('Dashboard');
    };

    const handleSignUp = () => {
        // 회원가입 화면으로 이동합니다.
        navigation.navigate('SignUp');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>아이디:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <Text style={styles.label}>비밀번호:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signupText}>계정이 없으신가요? 회원가입</Text>
            </TouchableOpacity>
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
    buttonContainer: {
        flexDirection: 'column', // 버튼을 세로로 배치합니다.
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    signupText: {
        fontSize: 16,
        marginTop: 16,
        color: 'blue',
    },
});
