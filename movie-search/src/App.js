import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import './App.css';
import MovieSearch from './MovieSearch'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_en from "./translations/en/common.json";

const spacingUnit = 4;

const theme = createMuiTheme({
  overrides: {
    MUIDataTable: {
      tableRoot: {
        display: 'block',
        overflowX: 'auto'
      }
    },
    MUIDataTableBodyCell: {
      root: {
        color: "#000000",
        fontWeight: 400,
        fontSize: "0.7625rem",
        letterSpacing: "0.01071em"
      }
    },
    MuiTableCell: {
      root: {
        display: 'table-cell',
        padding: '0px 56px 0px 24px',
        textAlign: 'left',
        borderBottom: '1px solid rgba(239, 244, 249, 1)',
        verticalAlign: 'inherit',
      }
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: /* '#0361af' */ '#212b36',
    },
    secondary: {
      main: '#0361af',
      light: '#dcecf9',
      dark: '#0361af'
    },
    text: {
      primary: /* '#0361af' */'#000000',
      secondary: '#212b36'
    },
    background: {
      paper2: '#f5f3f1',
      default: '#faf9f8'
    },
    divider: '#7caad0'
  },
  components: {
    button: {
      primary: {

      },
      secondary: {
        minWidth: '5rem',
        textTransform: 'none',
        backgroundColor: 'white',
        border: '1px solid grey',
        borderRadius: '0%',
        minHeight: '1.8rem',
        padding: 0,
        lineHeight: 0
        // boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"
      }
    }
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
    },
    drawer: {
      width: '25rem'
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
    h2: {
      fontSize: "0.9rem",
      fontWeight: 'normal',
      lineHeight: 1.33,
      letterSpacing: "0em",
      textAlign: 'left',
    },
    h3: {
      color: "#0361af",
      fontSize: "0.9rem",
      lineHeight: 1.33,
      letterSpacing: "0em",
      textAlign: 'left',
      fontWeight: '600',
    },
    h4: {
      color: "#0361af",
      fontWeight: 600,
      fontSize: "0.7625rem",
      lineHeight: 1.5,
      letterSpacing: "0.01071em"
    },
    h5: {
      color: "#0361af",
      fontSize: "0.65rem",
      lineHeight: 1.33,
      letterSpacing: "0em",
      textAlign: 'left',
      fontWeight: 'normal',
    },
    h6: {
      color: "#0361af",
      fontSize: "1rem",
      lineHeight: 1.33,
      letterSpacing: "0em",
      textAlign: 'left',
      fontWeight: '600',
    },
    body1: {
      fontWeight: 600,
      fontSize: "0.8125rem",
      lineHeight: 1.5,
      letterSpacing: "0.01071em",
      textAlign: 'left'
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