import {StyleSheet, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const logo = require('../../assets/images/logo.png');

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('User pressed Sign In');
  };

  const handleForgotPassword = () => {
    console.log('User pressed Forgot Password');
  };

  const handleSignInFacebook = () => {
    console.log('User pressed Sign In with Facebook');
  };

  const handleSignInGoogle = () => {
    console.log('User pressed Sign In with Google');
  };

  const handleDontHaveAnAccount = () => {
    console.log('User pressed do not have an account');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <View style={styles.elements}>
          <CustomInput
            placeholder="Username"
            value={username}
            onValueChange={setUsername}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            onValueChange={setPassword}
            secureTextEntry
          />
          <CustomButton text="Sign In" onPressButton={handleSignIn} />
          <CustomButton
            text="Forgot Password?"
            onPressButton={handleForgotPassword}
            type="Secondary"
          />
          <CustomButton
            text="Sign In with Facebook"
            onPressButton={handleSignInFacebook}
            backgroundColor="#e7e8f6"
            textColor="#4b67aa"
          />
          <CustomButton
            text="Sign In with Google"
            onPressButton={handleSignInGoogle}
            backgroundColor="#f3e9ea"
            textColor="#cd6960"
          />
          <CustomButton
            text="Don't have an account? Create one"
            onPressButton={handleDontHaveAnAccount}
            type="Secondary"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 32,
    height: '100%',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 48,
  },
  elements: {
    width: '100%',
    gap: 16,
  },
});
