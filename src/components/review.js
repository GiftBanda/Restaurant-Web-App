import { Typography } from '@material-ui/core';
import { Container, Avatar } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    review: {
        marginTop: 120,
        marginBottom: 40,
        fontWeight: 400
    },
    info: {
        display: 'flex',
        justifyContent: 'center',
        gap: 16,
        marginTop: 20,
        marginBottom: 20
    },
    large: {
        height: 80,
        width: 80
    },
    name: {
        marginTop: 16
    }
    
})


const Review = () => {

    const classes = useStyles();

    return(
        <Container align='center'>
            <Typography className={classes.review} color='secondary' variant='h4' component='h1' gutterBottom >Client Review</Typography>
            <Typography variant='body2' component='p' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem <br /> rerum ex pariatur  molestiae expedita reiciendis repudiandae. <br /> Excepturi facere earum aut!</Typography>
            <div className={classes.info} > 
            <Avatar className={classes.large} src='../images/gb.jpg' />
            <div>
            <Typography className={classes.name} >Gift Banda</Typography>
            <Typography color='primary' ><small> CEO Afrogig</small></Typography>
            </div>
            </div>
        </Container>
    );
}

export default Review;