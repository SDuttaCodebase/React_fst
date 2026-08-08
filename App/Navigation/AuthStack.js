import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth Screens
import Launch from '../Screens/Auth/launch';
import Welcome from '../Screens/Auth/welcome';
import SignIn from '../Screens/Auth/SignIn';
import SignUp from '../Screens/Auth/SignUp';
import ForgotPass from '../Screens/Auth/forgot_pass';

// Onboarding Screens
import ChooseProduct from '../Screens/Home/choose_product';
import MakePayment from '../Screens/Home/make_payment';
import GetOrder from '../Screens/Home/get_order';
import GetStarted from '../Screens/Home/get_started';

// Home
import Home from '../Screens/Home/home';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Launch"
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen
        name="Launch"
        component={Launch}
      />

      <Stack.Screen
        name="ChooseProduct"
        component={ChooseProduct}
      />

      <Stack.Screen
        name="MakePayment"
        component={MakePayment}
      />

      <Stack.Screen
        name="GetOrder"
        component={GetOrder}
      />

      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />

      <Stack.Screen
        name="ForgotPass"
        component={ForgotPass}
      />

      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
      />

      <Stack.Screen
        name="Home"
        component={Home}
      />

    </Stack.Navigator>
  );
}