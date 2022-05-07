import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

import { Widget } from './src/components/Widget';

import { theme } from './src/theme';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
    }}>

      <Widget />

      <StatusBar 
        style="light" 
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
}


