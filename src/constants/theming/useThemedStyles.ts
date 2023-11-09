import {Theme} from './themeProvider';
import useTheme from './useTheme';

type ThemedStyles = Record<
  string,
  {
    [key: string]: string | number;
  }
>;

const useThemedStyles = (styles: (theme: Theme) => ThemedStyles) => {
  const theme = useTheme();
  return styles(theme);
};

export default useThemedStyles;
