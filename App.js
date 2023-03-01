import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View , Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput}
        placeholder="Course Goal"
        />
        <Button
        title="ADD"
        />
      </View>

      <View style={styles.inputContainer}>
        
        <Text>Our goals</Text>
        </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
  },

});
