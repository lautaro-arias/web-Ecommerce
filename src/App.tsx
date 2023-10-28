import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navs from './modules/home/nav/Navs';
import Banner from './modules/home/presentation/Banner';
import ProductsHome from './modules/home/season-products/ProductsHome';
import Info from './modules/home/information/Info';
import Categories from './modules/home/categories/Categories';
import Footer from './modules/home/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navs/>
      <Banner />
      <Info />
      <Categories />
      <ProductsHome />
      <Footer />
    </div>
  );
}

export default App;
