import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const base03 = '#002b36';
const base02 = '#073642';
const base01 = '#586e75';
const base00 = '#657b83';
const base0 = '#839496';
const base1 = '#93a1a1';
const base2 = '#eee8d5';
const base3 = '#fdf6e3';
const yellow = '#b58900';
const orange = '#cb4b16';
const red = '#dc322f';
const magenta = '#d33682';
const violet = '#6c71c4';
const blue = '#268bd2';
const blueDarken = '#2085cs';
const cyan = '#2aa198';
const green = '#859900';


const solarizedLight = {
  dark: false,
  colors: {
    background: base3,
    surface: base2,
    primary: base00,
    'primary-darken-1': base01,
    secondary: blue,
    'secondary-darken-1': blueDarken,
    error: red,
    info: yellow,
    success: green,
    warning: magenta,
    yellow: yellow,
    orange: orange,
    red: red,
    magenta: magenta,
    violet: violet,
    blue: blue,
    blueDarken: blueDarken,
    cyan: cyan,
    green: green,
  }
};

const solarizedDark = {
  dark: true,
  colors: {
    background: base03,
    surface: base02,
    primary: base0,
    'primary-darken-1': base1,
    secondary: blue,
    'secondary-darken-1': blueDarken,
    error: red,
    info: yellow,
    success: green,
    warning: magenta,
  },
  variables: {},
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'solarizedDark',
    themes: {
      solarizedDark,
      solarizedLight,
    }
  }
  });

export default defineNuxtPlugin(nuxt => {
  nuxt.vueApp.use(vuetify)
  nuxt.vuetify = vuetify
})
