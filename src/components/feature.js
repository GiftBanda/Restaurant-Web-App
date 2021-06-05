import { Typography, Grid, Card, CardContent, } from '@material-ui/core';
import { Container } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import FavIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles({
    feature: {
        marginTop: 120,
        marginBottom: 60,
        fontWeight: 400
    },
    img: {
        height: 200,
        width: '100%'
    },
})

const Feature = () => {

    const classes = useStyles();

    return(
        <Container>
            <Typography className={classes.feature} color='secondary' align='center' variant='h4' component='h1' gutterBottom >Featured Menu</Typography>
            <Grid justify='center' align='center' container spacing={6}>
            <Grid className='card' item lg={4}>
                    <Card >
                        <img className={classes.img} src='../images/salmon.jpg' alt='burger' />
                        <CardContent>
                        <Typography variant='h5' componet='h2' >Saturday Special</Typography>
                        <Typography>Everything k50</Typography>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        </CardContent>
    
                    </Card>
                </Grid>
                <Grid className='card' item lg={4}>
                    <Card >
                        <img className={classes.img} src='../images/steak.jpg' alt='burger' />
                        <CardContent>
                        <Typography variant='h5' componet='h2' >Holiday Special</Typography>
                        <Typography>Everything k100</Typography>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        </CardContent>
    
                    </Card>
                </Grid>
                <Grid className='card' item lg={4}>
                    <Card >
                        <img className={classes.img} src='../images/burrito.jpg' alt='burger' />
                        <CardContent>
                        <Typography variant='h5' componet='h2' >Snack Tuesday Special</Typography>
                        <Typography>Burrito at k30</Typography>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        </CardContent>
    
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Feature;