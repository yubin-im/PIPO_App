import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // 터미널에서 npm install react-native-vector-icons --save 설치

const images = [
  { 
    title: '작품 이름 1',
    source: require('./pic.jpg'),
    likes: 17
  },
  { 
    title: '작품 이름 2',
    source: require('./pic.jpg'),
    likes: 29
  },
  { 
    title: '작품 이름 3',
    source: require('./pic.jpg'),
    likes: 10
  },
  { 
    title: '작품 이름 4',
    source: require('./pic.jpg'),
    likes: 42
  }
];

const Main = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./pipo_logo_top.jpg')} style={styles.logo} />
      <Text style={styles.heading}>현재 인기 있는 작품</Text>
      <View style={styles.imagesContainer}>
        {images.map((image, index) => (
          <View key={index} style={styles.item}>
            <Image source={image.source} style={styles.image} />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{image.title}</Text>
              <View style={styles.likesContainer}>
                <Icon name="heart" size={20} color="black" style={styles.heartIcon} />
                <Text style={styles.likesText}>{image.likes}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  logo: {
    width: 120,
    height: 60,
    alignSelf: 'center',
    marginTop: 1, // 로고 위의 여백 조정
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '48%', // 2개의 열을 표시하기 위한 스타일
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  titleContainer: {
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'left',
    paddingLeft: 5,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // 하트 아이콘과 숫자를 오른쪽으로 이동
  },
  heartIcon: {
    marginRight: 5,
  },
  likesText: {
    fontSize: 16,
  },
});

export default Main;
