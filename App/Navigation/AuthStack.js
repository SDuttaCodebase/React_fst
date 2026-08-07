import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Launch from '../Screens/Auth/launch';
import ChooseProduct from '../Screens/Home/choose_product';
import MakePayment from '../Screens/Home/make_payment';
import SignIn from '../Screens/Auth/SignIn';
import SignUp from '../Screens/Auth/SignUp';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Launch"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Launch" component={Launch} />

      <Stack.Screen name="ChooseProduct" component={ChooseProduct} />

      <Stack.Screen name="MakePayment" component={MakePayment} />

      <Stack.Screen name="SignIn" component={SignIn} />

      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
