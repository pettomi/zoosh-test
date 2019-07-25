import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import './App.css';
import MovieSearch from './MovieSearch'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_en from "./translations/en/common.json";

const spacingUnit = 4;

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#212b36',
    },
    secondary: {
      main: '#f2dc9d',
      light: '#dcecf9',
      dark: '#0361af'
    },
    text: {
      primary: '#000000',
      secondary: '#212b36'
    },
    background: {
      paper2: '#f5f3f1',
      default: '#faf9f8'
    },
  },
  spacing: {
    unit: spacingUnit
  },
  shadows: ["none"],
  mixins: {
    toolbar: {
      minHeight: '3rem'
    },
    searchbar: {
      width: '10rem'
    }
  },
  typography: {
    fontFamily: `"BlinkMacSystemFont", "-apple-system", "Segoe UI", "Roboto, Helvetica", "Arial", "sans-serif"`,
    h1: {
      fontSize: "4rem",
      fontWeight: 'normal',
      letterSpacing: "0em",
      textAlign: 'center',
      color: '#e1dfdd'
    },
    h3: {
      color: "#0361af",
      fontSize: "0.9rem",
      lineHeight: 1.33,
      letterSpacing: "0em",
      textAlign: 'left',
      fontWeight: '600',
    },
    body1: {
      color: "#000000",
      fontWeight: 500,
      fontSize: "0.8125rem",
      letterSpacing: "0.01071em",
    },
    body2: {
      color: "#000000",
      fontWeight: 400,
      fontSize: "0.7125rem",
      letterSpacing: "0.01071em",
    }
  }
});

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
    en: {
      common: common_en               // 'common' is our custom namespace
    }
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <I18nextProvider i18n={i18next}>
            <MovieSearch />
          </I18nextProvider>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;