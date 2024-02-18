import React from 'react';
import {ScrollView, StyleSheet, Text, View, useColorScheme} from 'react-native';
const ElevatedCards = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text
        style={[
          isDarkMode ? styles.whiteText : styles.blackText,
          styles.headingText,
        ]}>
        Elevated Cards
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            Tap
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            me
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            to
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            see
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            more...
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            😀
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default ElevatedCards;
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
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
});
