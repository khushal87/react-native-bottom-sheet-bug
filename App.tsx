/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useBottomSheet} from './useBottomSheet';
import {BottomSheetComponent} from './BottomSheetComponent';

function App() {
  const {bottomSheetRef, closePicker, openPicker} = useBottomSheet();

  const onOpenHandler = () => {
    Keyboard.dismiss();
    openPicker();
  };

  const onCloseHandler = () => {
    closePicker();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <View style={[styles.textInputContainer, styles.topTextInputContainer]}>
          <TextInput
            style={styles.textInput}
            placeholder="Type here..."
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
          />
        </View>
        <Button onPress={onOpenHandler} title="Open Bottom Sheet" />
        <Button onPress={onCloseHandler} title="Close Bottom Sheet" />
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type here..."
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
          />
        </View>
        <BottomSheetComponent ref={bottomSheetRef} closePicker={closePicker} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  topTextInputContainer: {top: 100},
  textInputContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
    width: '80%',
    borderRadius: 5,
    padding: 10,
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default App;
