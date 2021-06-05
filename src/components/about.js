import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        marginTop: '7.5rem',
        marginBottom: '2.5rem'
    },
    img: {
        height: 400,
        width: 400,
        borderLeft: '1px solid #ffd600',
        borderBottom: '1px solid #ffd600',
    }
});

const About = () => {

    const classes = useStyles();

    return(
            <Grid container justify='center' className={classes.root} spacing={16} >
                <Grid item lg={4} >
                    <img className={classes.img} src='../images/chef.jpg' alt='chef' />
                </Grid>
                <Grid item lg={4} >
                    <Typography variant='h4' component='h1' color='secondary' gutterBottom>About Us</Typography>
                    <Typography variant='subtitle1' component='p' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident animi cumque quasi accusantium quas ducimus voluptatum error ipsum adipisci quos ipsam officiis veritatis deleniti ad nobis repellat mollitia, explicabo doloribus.

                    </Typography>
                    <Button variant='outlined' color='secondary'>READ MORE</Button>
                </Grid>
            </Grid> 
    );
}

export default About;