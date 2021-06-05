
import { Typography, Grid, Card, CardContent, Container } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import FavIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles({
    img: {
        height: 200,
        width: '100%',
    },
    menu: {
        marginTop: 120,
        marginBottom: 60,
        fontWeight: 400
    },
    card: {
        transition: 'transform 0.3s ease-in-out',
        '& hover': {
            boxShadow: '0px 0px 2px 2px rgba(226, 230, 0, 0.3)',
         transform: 'translateY(-10px)'
        }
    }   
})

const Menu = () => {

    const classes = useStyles();

    return(
        <div>
            <Container>
            <Typography className={classes.menu} color='secondary' align='center' variant='h4' component='h1' gutterBottom>Our Menu</Typography>
            <Grid justify='center' align='center' container spacing={6} >
                <Grid className='card' item lg={4}>
                    <Card >
                        <img className={classes.img} src='../images/burger.jpg' alt='burger' />
                        <CardContent>
                        <Typography variant='h5' componet='h2' >WAP Burger</Typography>
                        <Typography >k250</Typography>
                        <FavIcon className='fav-icon' />
                        <FavIcon className='fav-icon' />
                        <FavIcon className='fav-icon' />
                        <FavIcon className='fav-icon' />
                        <FavIcon className='fav-icon' />
                        </CardContent>
                        
                    </Card>
                </Grid>
                <Grid className='card' item lg={4}>
                    <Card >
                        <img className={classes.img} src='../images/fish.jpg' alt='burger' />
                        <CardContent>
                        <Typography variant='h5' componet='h2' >Bream and T-bone</Typography>
                        <Typography>k150</Typography>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon  />
                        </CardContent>
    
                    </Card>
                </Grid>
                <Grid className='card' item lg={4}>
                    <Card>
                        <img className={classes.img} src='../images/burrito.jpg' alt='burger' />
                        <CardContent>
                        <Typography variant='h5' componet='h2' >Burrito</Typography>
                        <Typography>k75</Typography>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon />
                        </CardContent>
                        
                    </Card>
                </Grid>
                <Grid className='card' item lg={4}>
                    <Card>
                        <img className={classes.img} src='../images/tbone.jpg' alt='burger' />
                        <CardContent>
                        <Typography variant='h5' componet='h2' >T-bone</Typography>
                        <Typography >k110</Typography>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon />
                        </CardContent>
                        
                    </Card>
                </Grid>
                <Grid className='card' item lg={4}>
                    <Card>
                        <img className={classes.img} src='../images/steak.jpg' alt='burger' />
                        <CardContent>
                        <Typography variant='h5' componet='h2' >Steak</Typography>
                        <Typography>k230</Typography>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        <FavIcon className='fav-icon'/>
                        </CardContent>
                        
                    </Card>
                </Grid>
                <Grid className='card' item lg={4}>
                    <Card>
                        <img className={classes.img} src='../images/salmon.jpg' alt='burger' />
                        <CardContent>
                        <Typography variant='h5' componet='h2' >Salmon</Typography>
                        <Typography>k170</Typography>
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
        </div>
    );
}

export default Menu;