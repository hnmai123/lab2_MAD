import { Image, StyleSheet, View, Button, Alert } from 'react-native';
import * as SMS from 'expo-sms';

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
  const message = 'My sample message';
  async function _handlePressButtonAsync(){
    const {result} = await SMS.sendSMSAsync(
        id,
        message,
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
      </View>
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
