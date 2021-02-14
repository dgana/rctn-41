import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

const Home = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeEmail = (e) => {
    console.log(e, 'test console');
    setEmail(e);
  };

  const onChangePassword = (e) => {
    console.log(e, 'test console');
    setPassword(e);
  };

  const onSubmit = () => {
    if (email === 'abc@gmail.com' && password === '123') {
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Wrong email / password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box1, styles.size]} />
      <View style={[styles.box2, styles.size]} />
      <View style={[styles.box3, styles.size]} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onChangeEmail}
          placeholder="input your email"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={onChangePassword}
          placeholder="input your password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Button
        title="Go to dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  box1: {
    position: 'relative',
    top: 20,
    left: 20,
    zIndex: 10,
    backgroundColor: 'salmon',
  },
  box2: {
    position: 'relative',
    top: 0,
    left: 50,
    zIndex: 11,
    backgroundColor: 'green',
  },
  box3: {
    position: 'relative',
    top: -10,
    left: 80,
    backgroundColor: '#6693f5',
  },
  size: {
    width: 100,
    height: 100,
  },
  inputContainer: {
    backgroundColor: 'orange',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 24,
  },
  input: {
    margin: 12,
    borderColor: 'black',
    borderWidth: 2,
    padding: 12,
    alignSelf: 'stretch',
  },
  button: {
    padding: 12,
    width: 200,
    backgroundColor: 'gray',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
});

export default Home;
