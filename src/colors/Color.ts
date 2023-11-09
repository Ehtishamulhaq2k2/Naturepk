const YELLOW = '#e69b00';
const ASBESTOS = '#7f8c8d';
const MIDNIGHT_BLUE = '#2c3e50';
const EMERALD = '#2ecc71';
const RED = '#e74c3c';
const CLOUDS = '#ecf0f1';
const SILVER = '#bdc3c7';
const WHITE = '#fff';
const BLACK = '#000';
const LIGHTGRY = '#ffFFFF26';
const LIGHTCONTENT = 'light-content';
const DARKCONTENT = 'dark-content';
const DARK = '#101418';

const common: Record<string, string> = {
  PRIMARY: YELLOW,
  SUCCESS: EMERALD,
  ERROR: RED,
  SEARCHBARCONTAINER: LIGHTGRY,
  LAUNCHSCREEN: YELLOW,
};

type Colors = {
  light: Record<string, string>;
  dark: Record<string, string>;
};

const colors: Colors = {
  light: {
    ...common,
    BACKGROUND: WHITE,
    TEXT: MIDNIGHT_BLUE,
    TEXT_SECONDARY: DARK,
    SEARCHBAR: BLACK,
    STATUSBAR: DARKCONTENT,
    THEME: WHITE,
  },
  dark: {
    ...common,
    BACKGROUND: BLACK,
    TEXT: BLACK,
    TEXT_SECONDARY: SILVER,
    SEARCHBAR: WHITE,
    STATUSBAR: LIGHTCONTENT,
    THEME: DARK,
  },
};

export default colors;
