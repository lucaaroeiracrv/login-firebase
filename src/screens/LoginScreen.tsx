import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Title, Snackbar } from 'react-native-paper';
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';  
import styles from '../styles/loginStyles';
import { RootStackParamList } from '../../types'; 

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');

  const checkRecord = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuário logado:', user.email);
        setSnackbarMessage('Login efetuado com sucesso!');
        setSnackbarVisible(true);
        setTimeout(() => {
          navigation.replace('Home'); 
        }, 2000);
      })
      .catch((error) => {
        console.log('Erro de login: Email ou senha inválidos\nError code', error.code);
        setSnackbarMessage(`Falha no login: ${error.message}`);
        setSnackbarVisible(true);
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
      <Button onPress={checkRecord} title="Entrar" />
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
        </Text>
      </TouchableOpacity>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000}  
        style={styles.snackbar}
        >
          {snackbarMessage}
      </Snackbar>
    </View>
  );
};

export default LoginScreen;
