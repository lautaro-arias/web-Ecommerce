import Navs from '../home/nav/Navs';
import Banner from '../home/presentation/Banner';
import ProductsHome from '../home/season-products/ProductsHome';
import Info from '../home/information/Info';
import Categories from '../home/categories/Categories';
import Footer from '../home/footer/Footer';
import MapGoogle from './map-google/MapGoogle';

function Main() {
return (
    <div>
    <Navs/>
    <Banner />
    <Info />
    <Categories />
    <ProductsHome />
    <MapGoogle/>
    <Footer />
    </div>
);
}

export default Main;
