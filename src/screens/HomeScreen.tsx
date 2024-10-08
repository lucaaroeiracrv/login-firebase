import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/homeStyles';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo à Home!</Text>
    </View>
  );
};

export default HomeScreen;
