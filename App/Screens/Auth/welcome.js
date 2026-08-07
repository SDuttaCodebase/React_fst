import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

// import FontAwesome from 'react-native-vector-icons/FontAwesome6';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { ActivityIndicator } from 'react-native';

export default function Welcome({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (email.trim() === '') {
      alert('Please enter your email');
      return;
    }

    if (password.trim() === '') {
      alert('Please enter your password');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      navigation.replace('ChooseProduct');
    }, 1800);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Welcome{'\n'}Back!</Text>

      {/* Email */}

      <View style={styles.inputContainer}>
        <Image
          source={require('../../Assets/Image/user.png')}
          style={styles.smallIcon}
        />
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor="#888"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password */}

      <View style={styles.inputContainer}>
        <Image
          source={require('../../Assets/Image/lock.png')}
          style={styles.smallIcon}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={hidePassword}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Image
            source={require('../../Assets/Image/eye.png')}
            style={styles.smallIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* <View style={styles.rememberContainer}>
        <TouchableOpacity
          style={[styles.checkbox, remember && styles.checkboxChecked]}
          onPress={() => setRemember(!remember)}
        >
          {remember && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>

        <Text style={styles.rememberText}>Remember Me</Text>
      </View> */}

      {/* Login */}

      <TouchableOpacity activeOpacity={0.85} onPress={handleLogin}>
        <LinearGradient
          colors={['#FF6A88', '#F83758']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.loginButton}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" size="small" />
          ) : (
            <Text style={styles.loginText}>Login</Text>
          )}
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.continue}>- OR Continue with -</Text>

      {/* Social Buttons */}

      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => Linking.openURL('https://accounts.google.com')}
        >
          <Image
            source={require('../../Assets/Image/google.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => Linking.openURL('https://appleid.apple.com')}
        >
          <Image
            source={require('../../Assets/Image/apple.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => Linking.openURL('https://www.facebook.com/login')}
        >
          <Image
            source={require('../../Assets/Image/facebook.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Bottom */}

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Create An Account</Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 28,
  },

  heading: {
    fontSize: 46,
    fontWeight: '800',
    color: '#111',
    marginTop: 60,
    lineHeight: 54,
  },

  inputContainer: {
    height: 62,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    marginTop: 28,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
    color: '#111',
  },

  forgot: {
    alignSelf: 'flex-end',
    marginTop: 10,
    color: '#F83758',
    fontSize: 14,
  },

  loginButton: {
    height: 58,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    shadowColor: '#F83758',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 12,
  },

  loginText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
  },

  continue: {
    marginTop: 45,
    textAlign: 'center',
    color: '#555',
    fontSize: 15,
  },

  socialContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  socialButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: '#F83758',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 45,
  },

  bottomText: {
    fontSize: 17,
    color: '#555',
  },

  signup: {
    fontSize: 17,
    fontWeight: '700',
    color: '#F83758',
    marginLeft: 6,
    textDecorationLine: 'underline',
  },

  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 18,
  },

  rememberText: {
    fontSize: 16,
    color: '#555',
    marginLeft: -8,
  },

  smallIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  socialIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#F83758',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxChecked: {
    backgroundColor: '#F83758',
  },

  checkmark: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
