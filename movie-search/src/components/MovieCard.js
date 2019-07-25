import { withStyles, Link } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import React from 'react';

const styles = theme => ({
    card: {
        maxWidth: 545,
        backgroundColor: theme.palette.secondary.main,
    },
    media: {
        height: 0,
        backgroundSize: "contain",
        paddingTop: '75%', // 4:3
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
});

function MovieCard(props) {
    const [expanded, setExpanded] = React.useState(false);
    const { classes, wiki, movieDetail, onExpand, similarMovies, onClick} = props

    function handleExpandClick() {
        setExpanded(!expanded);
        onExpand();
    }

    const handleWikiClick = () => {
        window.open(wiki.content_urls.desktop.page);
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="title" className={classes.avatar}>
                        {wiki.title[0]}
                    </Avatar>
                }
                title={<Typography h3>{wiki.title}</Typography>}
                subheader={wiki.description}
            />
            <CardMedia
                className={classes.media}
                image={wiki.originalimage ? wiki.originalimage.source : ""}
                title={wiki.title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {wiki.extract}
                    <Link onClick={handleWikiClick}>
                        <Typography body1>Go to Wikipedia</Typography>
                    </Link>
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Similar:</Typography>
                    {similarMovies && similarMovies.map(movie => (
                        <Link onClick={() => onClick(movie)}>
                            <Typography h3>
                                {movie.title}
                            </Typography>
                        </Link>
                    ))}
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default withStyles(styles)(MovieCard)