import Navs from '../components/nav/Navs';
import Banner from './carousel/Banner';
import ProductsHome from './all-Products/ProductsHome';
import Info from '../components/information/Info';
import Footer from '../components/footer/Footer';
import MapGoogle from './map-google/MapGoogle';

function Main() {
return (
    <div>
    <Navs/>
    <Banner />
    <Info />
    <ProductsHome />
    <MapGoogle/>
    <Footer />
    </div>
);
}

export default Main;
