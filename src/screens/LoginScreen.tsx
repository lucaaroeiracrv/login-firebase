import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';  
import Input from '../components/Input';
import Button from '../components/Button';
import { Title } from 'react-native-paper';
import styles from '../styles/loginStyles';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const chackRecord = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuário logado:', user.email);
        Alert.alert('Sucesso', 'Login efetuado com sucesso!');
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Erro', 'Falha no login. Verifique suas credenciais.');
      });
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Login</Title>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button onPress={chackRecord} title="Entrar" />
    </View>
  );
};

export default LoginScreen;
