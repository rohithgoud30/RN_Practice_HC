import {Image, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';

const FancyCard = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text
        style={[
          isDarkMode ? styles.whiteText : styles.blackText,
          styles.headingText,
        ]}>
        Trending Places
      </Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: '92%',
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#fff',
    shadowRadius: 3,
  },
  cardBody: {
    flex: 1,
    paddingHorizontal: 12,
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 8,
  },
  cardTitle: {
    color: '#000',
    marginBottom: 6,
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardLabel: {
    color: '#000',
    fontSize: 14,
    marginBottom: 8,
  },
  cardDescription: {
    color: '#758283',
    fontSize: 12,
    marginBottom: 12,
  },
  cardFooter: {
    color: '#000',
    marginBottom: 12,
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
});
