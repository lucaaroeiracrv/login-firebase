import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { Title } from 'react-native-paper';
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

  const checkRecord = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuário logado:', user.email);
        Alert.alert('Sucesso', 'Login efetuado com sucesso!', [
          { text: 'OK', onPress: () => navigation.replace('Home') }
        ]);
      })
      .catch((error) => {
        console.log('Erro', `Falha no login: ${error.message}`);
        Alert.alert(`Email ou senha inválidos\n\nError code: ${error.code}`);
      });
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Login</Title>
      <Input placeholder="Email"value={email} onChangeText={setEmail}/>
      <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry/>
      <Button onPress={checkRecord} title="Entrar" />
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.signUpText}> Don't have an account? <Text style={styles.signUpLink}>Sign up</Text> </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
