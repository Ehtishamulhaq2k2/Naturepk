export type Typography = {
  size: {
    S: number;
    M: number;
    L: number;
  };
  letterSpacing: {
    S: number;
    M: number;
    L: number;
  };
};

const size: Typography['size'] = {
  S: 16,
  M: 20,
  L: 30,
};

const letterSpacing: Typography['letterSpacing'] = {
  S: 2,
  M: 5,
  L: 10,
};

export const typography: Typography = {size, letterSpacing};
