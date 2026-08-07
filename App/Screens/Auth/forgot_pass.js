import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function ForgotPass({ navigation }) {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {

        if (email.trim() === '') {
            alert('Please enter your email');
            return;
        }

        setLoading(true);

        setTimeout(() => {

            setLoading(false);

            alert('Password reset link has been sent.');

            navigation.goBack();

        }, 1800);

    };

    return (

        <SafeAreaView style={styles.container}>

            <Text style={styles.heading}>
                Forgot{'\n'}password?
            </Text>

            <View style={styles.inputContainer}>

                <Image
                    source={require('../../Assets/Image/mail.png')}
                    style={styles.icon}
                />

                <TextInput
                    placeholder="Enter your email address"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                />

            </View>

            <Text style={styles.note}>
                <Text style={{ color: '#F83758' }}>* </Text>
                We will send you a message to set or reset your new password
            </Text>

            <TouchableOpacity
                activeOpacity={0.85}
                onPress={handleSubmit}
            >

                <LinearGradient
                    colors={['#FF6A88', '#F83758']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.button}
                >

                    {
                        loading ?

                            <ActivityIndicator
                                color="#FFF"
                            />

                            :

                            <Text style={styles.buttonText}>
                                Submit
                            </Text>

                    }

                </LinearGradient>

            </TouchableOpacity>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 28,
        paddingTop: 40,
    },

    heading: {
        fontSize: 46,
        fontWeight: '800',
        color: '#111',
        lineHeight: 55,
        marginBottom: 35,
    },

    inputContainer: {
        height: 62,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },

    icon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        tintColor: '#666',
    },

    input: {
        flex: 1,
        marginLeft: 12,
        fontSize: 16,
        color: '#111',
    },

    note: {
        marginTop: 18,
        fontSize: 14,
        color: '#777',
        lineHeight: 22,
    },

    button: {
        marginTop: 45,
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#F83758',
        shadowOpacity: 0.3,
        shadowRadius: 12,
        shadowOffset: {
            width: 0,
            height: 6,
        },

        elevation: 10,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: '700',
    },

});