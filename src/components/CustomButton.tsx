import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type CustomButtonProps = {
  text: string;
  onPressButton: () => void;
  type?: 'Primary' | 'Secondary';
  backgroundColor?: string;
  textColor?: string;
};

const CustomButton = ({
  text,
  onPressButton,
  type = 'Primary',
  backgroundColor,
  textColor,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[`button${type}`],
        backgroundColor ? {backgroundColor: backgroundColor} : {},
      ]}
      onPress={onPressButton}>
      <Text
        style={[
          styles.text,
          styles[`text${type}`],
          textColor ? {color: textColor} : {},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 8,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
  },
  buttonPrimary: {
    backgroundColor: '#3971f4',
  },
  buttonSecondary: {},
  textPrimary: {
    color: 'white',
  },
  textSecondary: {
    color: '#9096ad',
  },
});
