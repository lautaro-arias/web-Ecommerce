import Navs from '../components/nav/Navs';
import Banner from './carousel/Banner';
import ProductsHome from './cards-Products/ProductsHome';
import Modalcard from './cards-Products/ModalCard';
import Info from '../components/information/Info';
import Footer from '../components/footer/Footer';
import MapGoogle from './map-google/MapGoogle';
import CartOffcanvas from './shopping-cart/CartOffcanvas';
import MainPayment from '../components/shopping-cart/paymentComponents/MainPaymet'
import { CartProvider } from '../components/shopping-cart/handlers/cartHandler';
import { PaymentProvider } from '../components/shopping-cart/handlers/paymentHandler';
import Checkout from './shopping-cart/paymentComponents/Checkout';
import Payment from './shopping-cart/paymentComponents/Payment';
import FooterPay from './shopping-cart/paymentComponents/FooterPay';

const Main = () => {
    
return (
    <> 
            <Navs/>
            <CartOffcanvas />
            <Banner />
            <Info />
            <ProductsHome />
            <Modalcard/>
            <MapGoogle/>
            <Footer />
    </>
);
}

export default Main

