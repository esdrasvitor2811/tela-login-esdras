import React, { useState } from 'react';
import {Text, TextInput, View, Button, Alert, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CadastroStyles from '../styles/CadastroStyles';

export default function App() {
  // Definindo os estados para cada campo
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [municipio, setMunicipio] = useState('');

  // Função para preencher automaticamente os campos de endereço quando o CEP é inserido
  const handleCepChange = (text) => {
    setCep(text);

    // Checa se o CEP tem 8 caracteres (CEP válido)
    if (text.length === 8) {
      // Faz a requisição à API ViaCep
      fetch(`https://viacep.com.br/ws/${text}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (data.erro) {
            Alert.alert('Erro', 'CEP não encontrado.');
            return;
          }
          // Atualiza os campos de endereço, bairro, município e estado
          setEndereco(data.logradouro || '');
          setBairro(data.bairro || '');
          setMunicipio(data.localidade || '');
          setEstado(data.uf || '');
        })
        .catch(() => Alert.alert('Erro', 'Não foi possível buscar o endereço.'));
    }
  };

  // Função para exibir um alerta quando o formulário for enviado
  const handleSubmit = () => {
    if (!nome || !email || !senha || !endereco || !cep || !bairro || !municipio || !estado) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você poderia enviar os dados para um backend ou salvar no estado local
    Alert.alert('Cadastro realizado!', `Bem-vindo, ${nome}!`);
  };

  return (
    <ScrollView contentContainerStyle={CadastroStyles.container}>
      <Text style={CadastroStyles.title}>Cadastro</Text>

      <TextInput
        style={CadastroStyles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={CadastroStyles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={CadastroStyles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Campo CEP */}
      <TextInput
        style={CadastroStyles.input}
        placeholder="CEP"
        keyboardType="numeric"
        maxLength={8}  // Limita o campo a 8 caracteres
        value={cep}
        onChangeText={handleCepChange}  // Mudança aqui: chamando handleCepChange
      />

      <TextInput
        style={CadastroStyles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={CadastroStyles.input}
        placeholder="Bairro"
        value={bairro}
        onChangeText={setBairro}
      />
      <TextInput
        style={CadastroStyles.input}
        placeholder="Município"
        value={municipio}
        onChangeText={setMunicipio}
      />
      <TextInput
        style={CadastroStyles.input}
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
      />

      <Button title="Cadastrar" onPress={handleSubmit} />

      <StatusBar style="auto" />
    </ScrollView>
  );
}