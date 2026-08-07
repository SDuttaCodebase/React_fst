import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    if (email.trim() === '') {
      alert('Please enter your email');
      return;
    }

    if (password.trim() === '') {
      alert('Please enter your password');
      return;
    }

    if (confirmPassword.trim() === '') {
      alert('Please confirm your password');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      alert('Account Created Successfully!');

      navigation.replace('ChooseProduct');
    }, 1800);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Create an{'\n'}account</Text>

      {/* Username */}

      <View style={styles.inputContainer}>
        <Image
          source={require('../../Assets/Image/User.png')}
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

      {/* Confirm Password */}

      <View style={styles.inputContainer}>
        <Image
          source={require('../../Assets/Image/lock.png')}
          style={styles.smallIcon}
        />

        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry={hideConfirmPassword}
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
        >
          <Image
            source={require('../../Assets/Image/eye.png')}
            style={styles.smallIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Agreement */}

      <Text style={styles.agreement}>
        By clicking the <Text style={{ color: '#F83758' }}>Register</Text>{' '}
        button, you agree to the public offer
      </Text>

      {/* Register Button */}

      <TouchableOpacity activeOpacity={0.85} onPress={handleRegister}>
        <LinearGradient
          colors={['#FF6A88', '#F83758']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.registerButton}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.registerText}>Create Account</Text>
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
          onPress={() => Linking.openURL('https://facebook.com/login')}
        >
          <Image
            source={require('../../Assets/Image/facebook.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Bottom */}

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>I Already Have an Account</Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.login}>Login</Text>
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
    paddingTop: 35,
  },

  heading: {
    fontSize: 44,
    fontWeight: '800',
    color: '#111',
    lineHeight: 52,
    marginBottom: 25,
  },

  inputContainer: {
    height: 62,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 18,
    backgroundColor: '#FFF',
    elevation: 2,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#111',
  },

  smallIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: '#666',
  },

  agreement: {
    marginTop: 18,
    fontSize: 13,
    color: '#777',
    lineHeight: 20,
  },

  registerButton: {
    height: 58,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,

    shadowColor: '#F83758',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 8,
  },

  registerText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
  },

  continue: {
    marginTop: 35,
    textAlign: 'center',
    color: '#666',
    fontSize: 15,
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 22,
  },

  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#F83758',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  socialIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  bottomText: {
    color: '#555',
    fontSize: 16,
  },

  login: {
    color: '#F83758',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 6,
    textDecorationLine: 'underline',
  },
});
