import React, { useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';

export default function Launch({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ChooseProduct');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>

      <Image
        source={require('../../Assets/Image/stylish.png')}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 275,
    height: 100,
    resizeMode: 'contain',
  },

});