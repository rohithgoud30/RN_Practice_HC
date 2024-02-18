import React from 'react';
import {Text, View, StyleSheet, useColorScheme} from 'react-native';
const FlatCards = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text
        style={[
          isDarkMode ? styles.whiteText : styles.blackText,
          styles.headingText,
        ]}>
        Flat Cards
      </Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            Red
          </Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            Green
          </Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            Blue
          </Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            Red
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
});
