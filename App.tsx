import React, {useEffect} from 'react';

import ThemeProvider from './src/constants/theming/themeProvider';
import SplashScreen from 'react-native-splash-screen';
import Providers from './src/navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider>
      <Providers />
    </ThemeProvider>
  );
};

export default App;
