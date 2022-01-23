import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

export const GistItem = ({item, onPress}) => {
  return (
    <Pressable style={styles.itemContainer} onPress={() => onPress(item.owner.avatar_url)}>
      <Image
        style={styles.itemImage}
        source={{uri: item.owner.avatar_url}}
        fadeDuration={500}
      />
      <Text style={styles.itemText}>
        {Object.getOwnPropertyNames(item.files)}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemText: {
    flex: 1,
    textAlignVertical: 'center',
    marginLeft: 20,
  },
});
