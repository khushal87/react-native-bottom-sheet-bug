import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useEffect} from 'react';
import {Keyboard, Platform, StyleSheet, Text} from 'react-native';
import {useViewport} from './useViewport';
import {useScreenDimensions} from './useScreenDimensions';

export const BottomSheetComponent = ({
  closePicker,
  ref,
}: {
  ref: React.ForwardedRef<BottomSheet>;
  closePicker: () => void;
}) => {
  const {vh} = useViewport();
  const {vh: screenVh} = useScreenDimensions();

  const initialSnapPoint = vh(40);
  const finalSnapPoint = screenVh(100) - 100;
  const snapPoints = [initialSnapPoint, finalSnapPoint];

  useEffect(() => {
    const onKeyboardOpenHandler = () => {
      closePicker();
    };
    const keyboardShowEvent =
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const keyboardSubscription = Keyboard.addListener(
      keyboardShowEvent,
      onKeyboardOpenHandler,
    );

    return () => {
      // Following if-else condition to avoid deprecated warning coming RN 0.65
      if (keyboardSubscription?.remove) {
        keyboardSubscription.remove();
        return;
      }
      // @ts-ignore
      else if (Keyboard.removeListener) {
        // @ts-ignore
        Keyboard.removeListener(keyboardShowEvent, onKeyboardOpenHandler);
      }
    };
  }, [closePicker]);

  return (
    <BottomSheet
      enablePanDownToClose
      handleStyle={styles.handle}
      index={-1}
      ref={ref}
      snapPoints={snapPoints}>
      <BottomSheetView style={styles.container}>
        <Text>Bottom Sheet Content</Text>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  handle: {
    backgroundColor: 'cyan',
    borderRadius: 5,
    marginBottom: 10,
  },
});
