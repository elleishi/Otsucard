import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, KeyboardAvoidingView, Platform,TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const LoginScreen = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [showPassword, setShowPassword] = useState(false);

return (
<KeyboardAvoidingView
  behavior="padding"
  style={{ flex: 1 }}
  keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
>

  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#fff', paddingTop: 130 }}>

  <View style={styles.row1}>
    <Image
     source={require('../assets/images/otsuka-logo.png')}
     style={styles.logo}
     />
    
    {/* // <Text style={styles.welcomeBack}></Text> */}
    <Text style={{ fontSize: 16, color: '#999', marginTop: 25, alignContent: 'center', textAlign: 'center' }}>Otsuka  People creating new products for better health worldwide.</Text>
  </View>
    
  <View style={styles.inputContainer}>
    <TextInput
      label="Email"
      value={email}
      onChangeText={setEmail}
      mode="outlined"
      style={styles.inputBox}
      outlineColor="#426bba"s
      left={<TextInput.Icon icon="email" color="#262626" />}
      theme={{
       colors: {
        primary: '#426bba',
        background: '#fff',
        text: '#000',
        placeholder: '#999',
       },
      }}
     />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        outlineColor="#426bba"
        secureTextEntry={!showPassword}
        style={styles.inputBox}
        left={<TextInput.Icon icon="lock" color="#262626" />}
        right={
          <TextInput.Icon
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword(!showPassword)}
            color="#adadad"
          />
        }
        theme={{
          colors: {
            primary: '#426bba',
            background: '#fff',
            text: '#000',
            placeholder: '#999',
          },
        }}
      />
<TouchableOpacity onPress={() => console.log('Navigate to forgot password screen')}>
  <Text style={{ fontSize: 14, color: '#999', marginTop: -10, alignSelf: 'flex-end', marginBottom: 10 }}>
    Forgot Password?
  </Text>
</TouchableOpacity>
    
    <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        style={styles.loginButton}
        contentStyle={{ height: 50 }}
        theme={{
         colors: {
          primary: '#426bba',
          onPrimary: '#fff',
         },
        }}
    > Log In </Button>

<TouchableOpacity onPress={() => console.log('Dont have an account?')}>
  <Text style={{ fontSize: 16, color: '#999', marginTop: 20, alignSelf: 'center' }}>Don't have an account?</Text>
</TouchableOpacity>
  </View>
  
  <View style={styles.orContainer}>
  <View style={styles.line} />
  <Text style={styles.orText}>OR</Text>
  <View style={styles.line} />
  </View>

  {/* color btm design */}
  <View style={styles.row2}>  
<Button
   mode="contained"
   onPress={() => console.log('Pressed')}
   style={styles.registerButton}
   contentStyle={{ height: 50 }}
   theme={{
     colors: {
      primary: '#fff',
      onPrimary: '#426bba', 
     },
   }}
>
 Register
</Button>

  </View>
  
  </View>
  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>

 );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},

row1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    paddingHorizontal: 20,
},

welcomeBack: {
    fontSize: 32,
    fontWeight: '800',
    color: '#262626',
    marginTop: 20,

},

inputContainer: {
    width: '75%',
    justifyContent: 'space-between',
},

inputBox: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    height: 50,
},

loginButton: {
    backgroundColor: '#426bba',
    borderRadius: 55,
    height: 50,
},

registerButton: {
  backgroundColor: '#fff',
  borderRadius: 55,
  height: 50,
  width: '75%',
  },

logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10
},

row2: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#426bba',
    width: '100%',
    height: 250,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'absolute',
    bottom: -60,
},

orContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 25,
},

line: {
  width: '10%',
  height: 1,
  backgroundColor: '#ccc',
  marginHorizontal: 10,
},

});

export default LoginScreen;
