import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Switch } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Detail = () => {
  const route = useRoute();
  const { title } = route.params;

  // 가상의 데이터 예시
  const imageData = {
    title: '작품 이름 1',
    source: require('./pic.jpg'),
    description: '이 작품은...',
  };

  // 토글 버튼
  const [isPublic, setIsPublic] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={imageData.source} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>작품 설명</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{imageData.description}</Text>
        </View>
        <View style={styles.toggleContainer}>
          <Text style={styles.subtitle}>공개 여부</Text>
          <Switch
            value={isPublic}
            onValueChange={(value) => setIsPublic(value)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  textContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descriptionContainer: {
    borderColor: 'gray',
    borderWidth: 1,      
    borderRadius: 5,     
    padding: 10,       
    marginBottom: 10, 
  },
  description: {
    fontSize: 16,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Detail;
