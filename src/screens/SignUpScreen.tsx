import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Title } from 'react-native-paper';
import Input from '../components/Input';
import Button from '../components/Button';
import MaskedInput from '../components/MaskedInput';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import styles from '../styles/signUpStyles';
import { RootStackParamList } from '../../types';
import LoginScreen from './LoginScreen';

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUpScreen'>;

const SignUpScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const handleCreateAccount = async () => {
    if (password !== repeatPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }
    try{
    // Criando conta com Firebase
     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
     const user = userCredential.user;

     await setDoc(doc(db, 'users', user.uid),{
       name: name,
       email: email,
       birthDate:'',
       createdAt: new Date()
     });

      console.log('Conta criada com sucesso:', user.email);
      Alert.alert('Sucesso', 'Conta criada com sucesso!');
      navigation.replace('Login'); 

    } catch (error: any) {
      console.error('Erro ao criar conta:', error.code || 'Código desconhecido', error.message || 'Mensagem desconhecida');
      Alert.alert('Erro', `Falha ao criar conta: ${error.message || 'Erro desconhecido'}`);
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Create account</Title>
      <Input placeholder="Name" value={name} onChangeText={setName} />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Input placeholder="Repeat Password" value={repeatPassword} onChangeText={setRepeatPassword} secureTextEntry />
      <MaskedInput
        placeholder="Birth Date"
        value={birthDate}
        onChangeText={setBirthDate}
      /> 
      <Button title="Create Account" onPress={handleCreateAccount} />

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back to login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
