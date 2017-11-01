import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const OptionsModal = (props) => {
  return (
    <View style={styles.container} >

      <View style={{ flex: 9, width: 300 }}>
        <Text>Some Text</Text>
      </View>

      <View style={styles.modalButtons}>
        <TouchableOpacity style={styles.button} onPress={null}>
          <Text style={styles.text} >Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={null}>
          <Text style={styles.text} >Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  modalButtons: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 25,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    overflow: 'hidden',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  }
};

export default OptionsModal;
