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
  signUpText: {
    textAlign: 'center',
    color: '#808080',
    marginTop: 20,
  },
  signUpLink: {
    color: '#6200EE',
    fontWeight: 'bold',
  },
  snackbar: {
    position: 'absolute',
    top: 0,  // Alinha no topo da tela
    marginTop: 40,  // Distância do topo da tela para imitar uma notificação
    left: 10,
    right: 10,
    backgroundColor: '#E64545FD',  
    borderRadius: 8,  
    elevation: 5, 
    paddingVertical: 10,  
    paddingHorizontal: 20,
  },
});

export default styles;
