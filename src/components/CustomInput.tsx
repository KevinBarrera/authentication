import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

type CustomInputProps = {
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  secureTextEntry?: boolean;
};

const CustomInput = ({
  placeholder,
  value,
  onValueChange,
  secureTextEntry,
}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onValueChange}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#edeef3',
    height: 56,
    paddingHorizontal: 16,
  },
  input: {
    width: '100%',
    height: '100%',
  },
});
