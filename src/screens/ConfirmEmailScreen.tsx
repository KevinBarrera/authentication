import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const handleConfirmEmail = () => {
    console.log('User pressed Sign In');
  };

  const handleResendCode = () => {
    console.log('User pressed resend code');
  };

  const handleBackToSignIn = () => {
    console.log('User pressed do have an account');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm Email</Text>
        <View style={styles.elements}>
          <CustomInput
            placeholder="Code"
            value={code}
            onValueChange={setCode}
          />
          <CustomButton
            text="Confirm"
            onPressButton={handleConfirmEmail}
            type="Primary"
          />
          <CustomButton
            text="Resend Code"
            onPressButton={handleResendCode}
            type="Secondary"
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

export default ConfirmEmailScreen;

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
