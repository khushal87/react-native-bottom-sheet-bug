/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const ActualApp = () => {
  return (
    <GestureHandlerRootView>
      <App />
    </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent(appName, () => ActualApp);
