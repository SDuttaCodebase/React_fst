import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function GetOrder({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>

      {/* Top */}

      <View style={styles.topContainer}>

        <Text style={styles.pageNumber}>
          3/3
        </Text>

        <TouchableOpacity
          onPress={() => navigation.replace('ChooseProduct')}
        >
          <Text style={styles.skip}>
            Skip
          </Text>
        </TouchableOpacity>

      </View>

      {/* Image */}

      <Image
        source={require('../../Assets/Image/gorder.png')}
        style={styles.image}
      />

      {/* Title */}

      <Text style={styles.title}>
        Get Your Order
      </Text>

      {/* Description */}

      <Text style={styles.description}>
        Amet minim mollit non deserunt ullamco est
      </Text>

      <Text style={styles.description}>
        sit aliqua dolor do amet sint. Velit officia
      </Text>

      <Text style={styles.description}>
        consequat duis enim velit mollit.
      </Text>

      {/* Bottom */}

      <View style={styles.bottomContainer}>

        {/* Previous */}

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.prev}>
            Prev
          </Text>
        </TouchableOpacity>

        {/* Dots */}

        <View style={styles.dots}>

          <View style={styles.dot} />

          <View style={styles.dot} />

          <View style={styles.activeDot} />

        </View>

        {/* Get Started */}

        <TouchableOpacity
          onPress={() => navigation.replace('SignIn')}
        >
          <Text style={styles.getStarted}>
            Get Started
          </Text>
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

  prev: {
    fontSize: 20,
    fontWeight: '600',
    color: '#C4C4C4',
  },

  dots: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D5D5D5',
    marginHorizontal: 3,
  },

  activeDot: {
    width: 30,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#17223B',
    marginHorizontal: 3,
  },

  getStarted: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F83758',
  },

});