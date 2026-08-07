import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

export default function Launch({ navigation }) {

  useEffect(() => {

    const timer = setTimeout(() => {

      navigation.replace('SignIn');

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (

    <View style={styles.container}>

      <Image
        source={require('../../Assets/Image/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>
        Stylish
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex:1,

    justifyContent:'center',

    alignItems:'center',

    backgroundColor:'#FFFFFF',

  },

  logo:{

    width:85,

    height:85,

    resizeMode:'contain',

  },

  title:{

    marginTop:15,

    fontSize:34,

    fontWeight:'700',

    color:'#F34767',

  },

});