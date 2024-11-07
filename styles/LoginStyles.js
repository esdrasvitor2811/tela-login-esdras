import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      padding: 10,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor: '#fff',
    },
    separator: {
      marginVertical: 10,
      fontSize: 16,
      color: '#888',
    },
    button: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    buttoncadastro: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    buttonTextCadastro: {
      color: '#fff',
      fontSize: 16,
    },
  });
  
export default LoginStyles;