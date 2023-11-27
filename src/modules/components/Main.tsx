import Navs from '../components/nav/Navs';
import Banner from './carousel/Banner';
import ProductsHome from './cards-Products/ProductsHome';
import Info from '../components/information/Info';
import Footer from '../components/footer/Footer';
import MapGoogle from './map-google/MapGoogle';
import ModalCart from './shopping-cart/ModalCart'

function Main() {
return (
    <div>
    <Navs/>
    <ModalCart/>
    <Banner />
    <Info />
    <ProductsHome />
    <MapGoogle/>
    <Footer />
    </div>
);
}

export default Main;
