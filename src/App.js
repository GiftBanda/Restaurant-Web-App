import './App.css';
import Navbar from './components/navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import {yellow, blue} from '@material-ui/core/colors'
import Home from './pages/Home';



//Custom theme styles
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[400]
    },
    secondary: {
      main: yellow['A700']
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

function App() {
  return (
    <ThemeProvider theme={theme} >
     
    <Router>

    <Navbar />

    <Switch>
      <Route path='/' component={Home} />
    </Switch>
    </Router>

    </ThemeProvider>
  );
}

export default App;
