import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {grey} from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        paddingTop: 120,
        height: '100vh',
        color: '#fff',
        width: '100%',
        overflow: 'hidden'
    },
    welcome: {
        color: grey[500],
        paddingTop: 32,
        paddingBottom: 16
    },
    img: {
        height: 450,
        width: 450,
        borderRadius: 5
    },
    taste: {
        marginTop: 20,
        marginBottom: 40,
        fontSize: 24,
        fontWeight: 400
    }
})


const Hero = () => {

    const classes = useStyles();

    return(
        <Container >
        <Grid justify='center' className={classes.root} container spacing={2} >
            <Grid item lg={4}>
                <Typography className={classes.welcome} variant='h5' component='h6' gutterBottom>
                    Welcome To DeliFood
                </Typography>
                <Typography variant='h4' component='h1' gutterBottom>
                    Come Taste The Best Meal For Everyone Always!
                </Typography>
                <Typography className={classes.taste} color='secondary' gutterBottom>
                    Discover Your Taste
                </Typography>
                <Button variant='outlined' color='secondary'>ORDER NOW</Button>
            </Grid>
            <Grid item lg={4}>
                    <img className={classes.img} src='../images/burger.jpg' alt='burger' />
                
            </Grid>
        </Grid>
        </Container>
    );
}

export default Hero;