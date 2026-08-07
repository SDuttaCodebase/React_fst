import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function GetStarted({ navigation }) {

    return (

        <View style={styles.container}>

            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />

            <ImageBackground
                source={require('../../Assets/Image/get_started.png')}
                style={styles.background}
                resizeMode="cover"
            >

                <LinearGradient
                    colors={[
                        'transparent',
                        'rgba(0,0,0,0.35)',
                        'rgba(0,0,0,0.85)',
                    ]}
                    style={styles.overlay}
                >

                    <View style={styles.content}>

                        <Text style={styles.title}>
                            You Want{"\n"}Authentic, Here{"\n"}You Go!
                        </Text>

                        <Text style={styles.subtitle}>
                            Find it here, buy it now.
                        </Text>

                        <TouchableOpacity
                            activeOpacity={0.85}
                            style={styles.button}
                            onPress={() => navigation.replace('Home')}
                        >

                            <Text style={styles.buttonText}>
                                Get Started
                            </Text>

                        </TouchableOpacity>

                    </View>

                </LinearGradient>

            </ImageBackground>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },

    background: {
        flex: 1,
    },

    overlay: {
        flex: 1,
        justifyContent: "flex-end",
    },

    content: {
        paddingHorizontal: 30,
        paddingBottom: 45,
    },

    title: {
        color: "#FFFFFF",
        fontSize: 36,
        fontWeight: "800",
        lineHeight: 45,
    },

    subtitle: {
        color: "#FFFFFF",
        fontSize: 18,
        marginTop: 15,
        opacity: 0.9,
    },

    button: {
        marginTop: 35,
        height: 60,
        borderRadius: 12,
        backgroundColor: "#F83758",

        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#F83758",
        shadowOpacity: 0.35,
        shadowRadius: 12,
        shadowOffset: {
            width: 0,
            height: 6,
        },

        elevation: 12,
    },

    buttonText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "700",
    },

});