import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ChooseProduct({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}

      <View style={styles.topContainer}>
        <Text style={styles.pageNumber}>1/3</Text>

        <TouchableOpacity onPress={() => navigation.replace('GetStarted')}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Illustration */}

      <Image
        source={require('../../Assets/Image/cproducts.png')}
        style={styles.image}
      />

      {/* Title */}

      <Text style={styles.title}>Choose Products</Text>

      {/* Description */}

      <Text style={styles.description}>
        Amet minim mollit non deserunt ullamco est
      </Text>

      <Text style={styles.description}>
        sit aliqua dolor do amet sint. Velit officia
      </Text>

      <Text style={styles.description}>consequat duis enim velit mollit.</Text>

      {/* Bottom */}

      <View style={styles.bottomContainer}>
        <View style={styles.dots}>
          <View style={styles.activeDot} />

          <View style={styles.dot} />

          <View style={styles.dot} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('MakePayment')}>
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
  },

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  pageNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222222',
  },

  skip: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
  },

  image: {
    width: '100%',
    height: 340,
    resizeMode: 'contain',
    marginTop: 35,
    alignSelf: 'center',
  },

  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#111111',
    textAlign: 'center',
    marginTop: 18,
  },

  description: {
    fontSize: 15,
    color: '#A0A0A0',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 22,
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 35,
    left: 25,
    right: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dots: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  activeDot: {
    width: 30,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#17223B',
    marginRight: 6,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D5D5D5',
    marginHorizontal: 3,
  },

  next: {
    fontSize: 22,
    fontWeight: '600',
    color: '#F83758',
  },
});
