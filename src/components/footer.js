import { Typography } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import FaLocation from '@material-ui/icons/LocationCity';
import Twitter from '@material-ui/icons/Twitter';
import Linkedin from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';
import Youtube from '@material-ui/icons/YouTube';
import Instagram from '@material-ui/icons/Instagram';
import { blue, orange, red } from "@material-ui/core/colors";


const useStyles = makeStyles({
    root: {
        marginTop: '2rem',
        borderTop: '2px solid #333',
        paddingTop: '2rem'
    },
    twitter: {
        color: blue[600],
        marginRight: 16
    },
    linkedin: {
        color: blue[800],
        marginRight: 16
    },
    facebook: {
        color: blue[700],
        marginRight: 16
    },
    instagram: {
        color: orange[800],
        marginRight: 16
    },
    youtube: {
        color: red[900],

    }
})


const Footer = () => {

    const classes = useStyles();

    const date = new Date();
    let currentYear = date.getFullYear();

    return(
        <Container className={classes.root} >
            <Grid container spacing={4} justify='center'>
                <Grid item md={12} lg={4}>
                    <Typography>DeliFood</Typography>
                    <Typography><small> Copyright, Gift Banda {currentYear}</small></Typography>
                </Grid>
                <Grid item md={12} lg={4}>
                    <Typography gutterBottom>Follow Us On Social Media</Typography>
                    <Twitter className={classes.twitter} />
                    <Linkedin className={classes.linkedin} />
                    <Facebook className={classes.facebook} />
                    <Instagram className={classes.instagram} />
                    <Youtube className={classes.youtube} />
                </Grid>
                <Grid item md={12} lg={4}>
                    <Typography gutterBottom>Find Us At</Typography>
                    <Typography variant='body2' component='p' ><FaLocation color='primary' />3674 Corner of Thabo Mbeki Road Kabulonga, Lusaka, Zambia</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;