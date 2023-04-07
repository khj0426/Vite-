import React from 'react';
import { ThemeProvider } from 'styled-components';

type ButThemeType = {
  colors: {
    LightRed: string;
  };
  border: {
    default: string;
  };
  borderRadius: {
    default: string;
  };
};
const butTheme: ButThemeType = {
  colors: {
    LightRed: '#FFC0CB',
  },
  border: {
    default: '1px solid #fff',
  },
  borderRadius: {
    default: '10px',
  },
};

const ButtonTheme = () => {
  <ThemeProvider theme={butTheme} />;
};
export default ButtonTheme;
