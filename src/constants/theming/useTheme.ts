import {useContext} from 'react';

import {ThemeContext, Theme} from './themeProvider';

const useTheme = (): Theme => useContext(ThemeContext) as Theme;

export default useTheme;
