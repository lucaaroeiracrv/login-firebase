import React from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { TextInput as PaperTextInput } from 'react-native-paper';

interface MaskedInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const MaskedInput: React.FC<MaskedInputProps> = ({placeholder, value, onChangeText, secureTextEntry = false,}) => {
  return (
    <TextInputMask
      type={'datetime'}
      options={{
        format: 'DD/MM/YYYY', 
      }}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={{ marginVertical: 10, backgroundColor: '#f5f5f5' }} 
      customTextInput={PaperTextInput} 
      customTextInputProps={{
        label: placeholder,
        mode: 'outlined',
        theme: { colors: { text: '#000000', placeholder: '#000000', primary: '#808080' } },
      }}
    />
  );
};

export default MaskedInput;


/*tava conflitando ai pedi pro chat me salvar (deixar caso volte a conflitar)


import React from 'react';
import { TextInput as PaperTextInput } from 'react-native-paper';

interface MaskedInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  // Função para formatar a data
  const handleChangeText = (text: string) => {
    // Remover caracteres não numéricos
    const cleaned = text.replace(/\D/g, '');
    let formatted = '';

    // Formatação simples para YYYY-MM-DD
    if (cleaned.length <= 4) {
      formatted = cleaned;
    } else if (cleaned.length <= 6) {
      formatted = `${cleaned.slice(0, 4)}-${cleaned.slice(4)}`;
    } else {
      formatted = `${cleaned.slice(0, 4)}-${cleaned.slice(4, 6)}-${cleaned.slice(6, 8)}`;
    }

    onChangeText(formatted);
  };

  return (
    <PaperTextInput
      label={placeholder}
      value={value}
      onChangeText={handleChangeText}
      secureTextEntry={secureTextEntry}
      mode="outlined"
      style={{ marginVertical: 10, backgroundColor: '#f5f5f5' }}
      theme={{
        colors: { text: '#000000', placeholder: '#000000', primary: '#808080' },
      }}
    />
  );
};

export default MaskedInput;
*/
