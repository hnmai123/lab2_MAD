import { TextInput, StyleSheet, View, Button, Alert } from 'react-native';
import * as SMS from 'expo-sms';
import {Link} from 'expo-router';
import {useState} from 'react';

export default function HomeScreen() {
  
  function asktoSend() {
    Alert.alert('SMS Send', 'Send: ' + id, [
      {
        text: 'Cancel',
      },
      {
        text: 'ok', onPress: () => _handlePressButtonAsync()
      }
    ])
  }

  const id = ['0123456789', '9876543210'];
  const [text, onChangeText] = useState('Hello: This is Huy');

  async function _handlePressButtonAsync(){
    const {result} = await SMS.sendSMSAsync(
        id,
        text,
        {
          attachments: {
            uri: 'https://www.latrobe.edu.au/__data/assets/file/0010/796393/logo-white.svg',
            mimeType: 'image/png',
            filename: 'myfile.png'
          },
        }
    );

    if (result === 'sent') {
      alert("Sent");
    } else {
      alert("Error: Check your balance or check phone");
    }
  } 

  return (
    <View style = {styles.header}>
      <View style = {styles.containerRow}>
        <Button 
          title = "Send SMS"
          onPress = {() => asktoSend()}
        />
        <Link href = "./contacts" asChild>
          <Button title = "Contacts"></Button>
        </Link>
      </View>
      <TextInput 
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 40
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
});
