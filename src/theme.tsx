import { DefaultTheme } from "styled-components";
declare module 'styled-components' {
 interface DefaultTheme{
    breakpoint: {
      mobileMax: number;
    },
    colors: {
      teal: string;
        athensGray: string;
      white:  string;
      forestGreen:  string;
      crimson:  string;
    },
  }
};

export const theme: DefaultTheme = {
  breakpoint: {
    mobileMax: 767,
  },
  colors: {
    teal: "#008080",
    athensGray: "#EEEDEF",
    white: "#ffffff",
    forestGreen: "#228c22",
    crimson: "#db143c",
  }
};
