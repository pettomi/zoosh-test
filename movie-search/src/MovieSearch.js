import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { compose } from 'recompose';
import { history, store } from './Store/Store';
import Blank from './components/Blank';
import ErrorBoundary from './components/ErrorBoundary';
import AppBar from './components/AppBar';
import WikiViewer from './components/WikiViewer';


const MovieViewer = React.lazy(() => import('./components/MovieViewer'));

const styles = theme => ({
  root: {
    display: 'flex',
  },
});

class MovieSearch extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Provider store={store}>
          <ErrorBoundary>
            <ConnectedRouter history={history}>
              <Switch>
                <Route exact path="/search" render={() => (
                    <AppBar>
                      <Blank />
                    </AppBar>
                )} />
                <Route exact path="/wiki" render={() =>
                    <AppBar>
                        <Suspense fallback={<> </>}>
                            <WikiViewer />
                        </Suspense>
                    </AppBar>
                } />
                <Route path="/" render={() => (<Redirect to="/search" />)} />
              </Switch>
            </ConnectedRouter>
          </ErrorBoundary>
        </Provider>
      </div>
    );
  }
}

MovieSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles)
)(MovieSearch);