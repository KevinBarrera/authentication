import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthenticationStackParamList} from '../navigation/params';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationStackParamList>>();

  const handleRegister = () => {
    console.log('Send data to BE and to send a confirmation code for email');
    navigation.navigate('ConfirmEmail');
  };

  const handleHaveAnAccount = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.elements}>
          <CustomInput
            placeholder="Username"
            value={username}
            onValueChange={setUsername}
          />
          <CustomInput
            placeholder="Email"
            value={email}
            onValueChange={setEmail}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            onValueChange={setPassword}
            secureTextEntry
          />
          <CustomInput
            placeholder="Confirm Password"
            value={passwordConfirmation}
            onValueChange={setPasswordConfirmation}
            secureTextEntry
          />
          <CustomButton text="Register" onPressButton={handleRegister} />
          <Text style={styles.policy}>
            By registering, you confirm that you accept our{' '}
            <Text style={styles.policyLink}>Terms of Use</Text> and{' '}
            <Text style={styles.policyLink}>Privacy Policy.</Text>
          </Text>
          <SocialSignInButtons />
          <CustomButton
            text="Have an account? Sign In"
            onPressButton={handleHaveAnAccount}
            type="Tertiary"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 32,
    height: '100%',
    gap: 56,
  },
  title: {
    color: '#061c5b',
    fontSize: 32,
    fontWeight: '900',
  },
  elements: {
    width: '100%',
    gap: 16,
  },
  policy: {
    color: '#abacbb',
    fontWeight: '500',
  },
  policyLink: {
    color: '#dabaa3',
    fontWeight: '500',
  },
});
