import React from 'react';
import { TextInput } from 'react-native-paper';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, secureTextEntry = false }) => {
  return (
    <TextInput
      label={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      mode="outlined"
      style={{ marginVertical: 10, backgroundColor: '#f5f5f5' }}
      theme={{ colors: { text: '#000000', placeholder: '#000000', primary: '#808080' } }} // Ajuste para cor do texto e do placeholder
    />
  );
};


export default Input;
