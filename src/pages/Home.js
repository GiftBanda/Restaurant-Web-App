import Hero from '../components/hero';
import About from '../components/about';
import Menu from '../components/menu';
import Feature from '../components/feature';
import Review from '../components/review';
import Contact from '../components/contact';
import Footer from '../components/footer';


const Home = () => {

    return(
        <div >
        <Hero />
        <About />
        <Menu />
        <Feature />
        <Review />
        <Contact />
        <Footer />
        </div>
    );
}

export default Home;