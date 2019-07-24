import { Typography, withStyles } from '@material-ui/core'
import { default as React} from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function WikiViewer(props) {
  const {classes, wiki = {}} = props;
  const extract = wiki ? wiki.extract : "";

  return (
    <div className={classes.root}>
        <Typography variant='body2'>
            {extract}
        </Typography>
    </div>
  );
}

const mapStateToProps = state => ({
    wiki: state.entities.wiki,
  });


export default compose(
    withStyles(styles),
    connect(mapStateToProps, null)
)(WikiViewer);