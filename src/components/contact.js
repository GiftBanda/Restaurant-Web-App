import { Typography } from "@material-ui/core";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    contact: {
        marginTop: 120,
        marginBottom: 40,
        fontWeight: 400,
    },
    img: {
        height: 400,
        width: 400,
        borderLeft: '1px solid #ffd600',
        borderBottom: '1px solid #ffd600',
    },
    root: {
        backgroundColor: '#fff',
        color: '#000',
        height: 400,
        marginTop: '1rem',
        borderRight: '2px solid #ffd600',
        borderTop: '1px solid #ffd600',
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
        caretColor: '#ffd600'
    },
});


const Contact = () => {

    const classes = useStyles();

    return(
        <Container  >
            <Typography className={classes.contact} align='center' color='secondary' variant='h4' component='h1' gutterBottom>Contact Us</Typography>
            <Grid container spacing={4} justify='center' >
                <Grid item lg={4}>
                    <img className={classes.img} src='../images/chef.jpg' alt='food' />
                </Grid>
                <Grid className={classes.root} item lg={4}>
                    <Typography >Place your order with us and you'll receive a text from us within 30 min</Typography>
                    <form noValidate autoComplete='off'>
                        <TextField className={classes.field} id='outlined-basic' label='Name' variant='outlined' required fullWidth color='secondary' />
                        <TextField className={classes.field} id='outlined-basic' label='Email' type='email' variant='outlined' required fullWidth color='secondary' />
                        <TextField className={classes.field} id='outlined-basic' label='Details' variant='outlined' required fullWidth color='secondary' multiline rows={3} />
                        <Button variant='contained' color='secondary' >Let's Talk</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Contact;