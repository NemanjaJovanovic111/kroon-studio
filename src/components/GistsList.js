import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { useState } from 'react/cjs/react.development';
import { GistItem } from './GistItem';

export const GistsList = ({ items, onEndReached }) => {
  const screenHeight = Dimensions.get("screen").height;
  const screenWidth = Dimensions.get("screen").width;
  const imageHeight = 200;
  const imageWidth = 200;
  const imageTop = screenHeight / 2 - imageHeight / 2;
  const imageLeft = screenWidth / 2 - imageWidth / 2;

  const [selectedImage, setSelectedImage] = useState(null);

  const showImage = (avatarUrl) => {
    setSelectedImage(avatarUrl);
    setTimeout(() => {
      setSelectedImage(null);
    }, 1000);
  }

  const renderItem = ({ item }) => {
    return <GistItem item={item} onPress={showImage} />;
  };

  const loader = () => {
    return <ActivityIndicator size="large" color="#aaa" />;
  };

  return (
    <>

      {selectedImage && <Image style={{ position: "absolute", top: imageTop, left: imageLeft, width: imageWidth, height: imageHeight, zIndex: 9, elevation: 4 }} source={{ uri: selectedImage }} fadeDuration={1000}/>}

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Gists</Text>
      </View>


      <FlatList
        style={{ marginTop: 20 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        ListFooterComponent={loader}
      />
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'lightgrey',
  },
  title: {
    fontWeight: '700',
  },
});
