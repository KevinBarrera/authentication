import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthenticationStackParamList} from '../navigation/params';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationStackParamList>>();

  const handleSendCode = () => {
    console.log('Communicate with BE to send a confirmation code');
    navigation.navigate('ResetPassword');
  };

  const handleBackToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot your password?</Text>
        <View style={styles.elements}>
          <CustomInput
            placeholder="Username"
            value={username}
            onValueChange={setUsername}
          />
          <CustomButton
            text="Send code"
            onPressButton={handleSendCode}
            type="Primary"
          />
          <CustomButton
            text="Back to Sign In"
            onPressButton={handleBackToSignIn}
            type="Tertiary"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

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
    textAlign: 'center',
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
