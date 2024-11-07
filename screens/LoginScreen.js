import React, { useState } from 'react';
import {Text, TextInput, View, Button, Alert, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginStyles from '../styles/LoginStyles';

export default function LoginScreen({ navigation }) {
  // Definindo os estados para os campos de login
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função para lidar com o login
  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode fazer a lógica de autenticação
    // Como exemplo, vou apenas exibir um alerta de sucesso
    Alert.alert('Login realizado!', `Bem-vindo, ${email}!`);
    
    // Redirecionando para a tela principal (ou home)
    // navigation.navigate('Home'); // Descomente isso para navegar para outra tela
  };



  return (
    <View style={LoginStyles.container}>
      <Text style={LoginStyles.title}>Login</Text>

      <TextInput
        style={LoginStyles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={LoginStyles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={LoginStyles.button}>
        <Text style={LoginStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LoginStyles.buttoncadastro} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={LoginStyles.buttonTextCadastro}>Cadastre-se</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}