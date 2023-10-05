import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DashboardScreen({ navigation }) {
    const handleLogout = () => {
        // 여기에서 로그아웃 로직을 구현하세요.
        // 예를 들어, 사용자 세션을 삭제하고 로그인 화면으로 이동하는 로직을 추가하세요.

        // 로그아웃이 성공하면 로그인 화면으로 이동합니다.
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>대시보드 화면</Text>
            <Text>이곳에 대시보드 내용을 표시합니다.</Text>
            <Button title="로그아웃" onPress={handleLogout} />
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
    heading: {
        fontSize: 24,
        marginBottom: 16,
    },
});
