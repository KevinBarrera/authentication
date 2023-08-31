import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type CustomButtonProps = {
  text: string;
  onPressButton: () => void;
  type?: 'Primary' | 'Secondary' | 'Tertiary';
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
  buttonSecondary: {
    borderWidth: 1,
    borderColor: '#3871f4',
  },
  buttonTertiary: {},
  textPrimary: {
    color: 'white',
  },
  textSecondary: {
    color: '#3871f4',
  },
  textTertiary: {
    color: '#9096ad',
  },
});
