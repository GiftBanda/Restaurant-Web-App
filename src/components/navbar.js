
import { Typography, Toolbar } from '@material-ui/core';
import Appbar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';




const useStyle = makeStyles( (theme) => {
    return {
        root: {
            paddingLeft: 100,
            paddingRight: 40,
            borderBottom: '1px solid #ffd600',
            backgroundColor: '#000'
        },
        logo: {
            flexGrow: 1,
            color: '#fff',
            cursor: 'default'
        },
        
    }
} );

const Navbar = () => {

    const classes = useStyle();

    return(
        <div>
            <Container>
            <Appbar className={classes.root} elevation={0} >
                <Toolbar >

                <Typography className={classes.logo} variant='h4' component='h6' ><mark>Deli</mark>Food</Typography>
                <ul>
                    <li>
                    <Link to='/' className='links' > Home </Link>
                    </li>
                    <li>
                    <Link to='/about' className='links' > About Us </Link>
                    </li>
                    <li>
                    <Link to='/book' className='links' > Table Bookings </Link>
                    </li>
                    <li>
                    <Link to='/menu' className='links' > Menu </Link>
                    </li>
                    <li>
                    <Link to='/contact' className='links' > Contact Us </Link>
                    </li>
                </ul>
                
                
                
                
                
                </Toolbar>

                
            </Appbar>
            </Container>
        </div>
    );
}

export default Navbar;