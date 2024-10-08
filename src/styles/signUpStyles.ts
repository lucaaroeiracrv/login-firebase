import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center', 
      padding: 20, 
      backgroundColor: '#d3d0cc',
  },
  title: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
      color: '#3D3D3DFF',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius: 4,
      marginBottom: 12,
      fontSize: 16,
    },
    backButton: { 
      marginTop: 20,
       alignItems: 'center' 
      },
    backButtonText: { 
      color: '#6200EE',
      fontWeight: 'bold',
  },
  });
  export default styles;