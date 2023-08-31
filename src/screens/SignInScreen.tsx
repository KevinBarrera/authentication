import {StyleSheet, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthenticationStackParamList} from '../navigation/params';

const logo = require('../../assets/images/logo.png');

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationStackParamList>>();

  const handleSignIn = () => {
    console.log('Validate with BE username and Password');
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleDontHaveAnAccount = () => {
    navigation.navigate('SignUp');
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
            type="Tertiary"
          />
          <SocialSignInButtons />
          <CustomButton
            text="Don't have an account? Create one"
            onPressButton={handleDontHaveAnAccount}
            type="Tertiary"
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
    tintColor: '#061c5b',
  },
  elements: {
    width: '100%',
    gap: 16,
  },
});
