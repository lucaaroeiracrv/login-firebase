import React from 'react';
import { Button as PaperButton } from 'react-native-paper';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <PaperButton 
      mode="contained" 
      onPress={onPress} 
      style={{ marginVertical: 10 }}>
      {title}
    </PaperButton>
  );
};

export default Button;
