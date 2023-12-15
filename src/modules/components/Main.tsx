import Navs from '../components/nav/Navs';
import Banner from './carousel/Banner';
import ProductsHome from './cards-Products/ProductsHome';
import Modalcard from './cards-Products/ModalCard';
import Info from '../components/information/Info';
import Footer from '../components/footer/Footer';
import MapGoogle from './map-google/MapGoogle';
import CartOffcanvas from './shopping-cart/CartOffcanvas';
import { CartProvider } from '../components/shopping-cart/handlers/cartHandler';

const Main = () => {
    
return (
    <> 
    <CartProvider>
    <Navs/>
    <CartOffcanvas />
    <Banner />
    <Info />
    <ProductsHome />
    <Modalcard/>
    <MapGoogle/>
    <Footer />
    </CartProvider>
    </>
);
}

export default Main

