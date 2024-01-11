import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans';

import { Loading } from '@components/Loading';
import { Home } from '@screens/Home';
import theme from '@theme/index';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" />

      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
