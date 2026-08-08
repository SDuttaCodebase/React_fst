import React from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function BottomTab({ navigation, activeTab }) {
  return (
    <View style={styles.container}>
      {/* HOME */}
      <TouchableOpacity
        style={styles.tab}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Home')}
      >
        <Image
          source={require('../../Assets/Image/home_img/home.png')}
          style={styles.icon}
        />

        <Text style={activeTab === 'Home' ? styles.activeText : styles.text}>
          Home
        </Text>
      </TouchableOpacity>

      {/* WISHLIST */}
      <TouchableOpacity
        style={styles.tab}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Wishlist')}
      >
        <Image
          source={require('../../Assets/Image/home_img/heart.png')}
          style={styles.icon}
        />

        <Text
          style={activeTab === 'Wishlist' ? styles.activeText : styles.text}
        >
          Wishlist
        </Text>
      </TouchableOpacity>

      {/* CART */}
      <TouchableOpacity style={styles.cartButton} activeOpacity={0.8}>
        <Image
          source={require('../../Assets/Image/home_img/cart.png')}
          style={styles.cartIcon}
        />
      </TouchableOpacity>

      {/* SEARCH */}
      <TouchableOpacity style={styles.tab} activeOpacity={0.7}>
        <Image
          source={require('../../Assets/Image/home_img/search.png')}
          style={styles.icon}
        />

        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>

      {/* SETTINGS */}
      <TouchableOpacity style={styles.tab} activeOpacity={0.7}>
        <Image
          source={require('../../Assets/Image/home_img/settings.png')}
          style={styles.icon}
        />

        <Text style={styles.text}>Setting</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 78,
    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',

    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  tab: {
    flex: 1,
    height: '100%',

    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },

  text: {
    marginTop: 4,
    fontSize: 12,
    color: '#111111',
  },

  activeText: {
    marginTop: 4,
    fontSize: 12,
    color: '#FF3B5C',
  },

  cartButton: {
    width: 64,
    height: 64,

    borderRadius: 32,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: -28,

    elevation: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },

  cartIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
