import Navs from '../components/nav/Navs';
import Banner from './carousel/Banner';
import ProductsHome from './cards-Products/ProductsHome';
import Modalcard from './cards-Products/ModalCard';
import Info from '../components/information/Info';
import Footer from '../components/footer/Footer';
import CartOffcanvas from './shopping-cart/CartOffcanvas';

const Main = () => {
    return (
        <>
            <Navs />
            <CartOffcanvas />
            <Banner />
            <Info />
            <ProductsHome />
            <Modalcard />
            <Footer />
        </>
    );
}
export default Main;

