import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Title } from 'react-native-paper';
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import styles from '../styles/signUpStyles';
import { RootStackParamList } from '../../types';

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUpScreen'>;

const SignUpScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const handleCreateAccount = () => {
    if (password !== repeatPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    // Criando conta com Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Conta criada com sucesso:', user.email);
        Alert.alert('Sucesso', 'Conta criada com sucesso!');
        navigation.navigate('Login');  // Redireciona para a tela de login após criar a conta
      })
      .catch((error) => {
        console.error('Erro ao criar conta:', error.code, error.message);
        Alert.alert('Erro', `Falha ao criar conta: ${error.message}`);
      });
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Create account</Title>
      <Input placeholder="Name" value={name} onChangeText={setName} />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Input placeholder="Repeat Password" value={repeatPassword} onChangeText={setRepeatPassword} secureTextEntry />
      <Button title="Create Account" onPress={handleCreateAccount} />

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back to login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
