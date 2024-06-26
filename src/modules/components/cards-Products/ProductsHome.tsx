import { faInfo, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Categories from '../categories/Categories';
import useFilterProduct from '../categories/handlers/categoriesHandler';
import { useShoppingProduct } from '../shopping-cart/handlers/shoppingHandler';
import './styles/cardProduct.css';

const ProductsHome = () => {
  const { handleClickAddOne, handleClickAddProduct, handleClickShow } = useShoppingProduct();
  const { handleFilter, handleShowMoreClick, visibleFilteredProducts } = useFilterProduct();

  return (
    <div className="container mb-4">
      <Categories handleFilter={handleFilter} />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  row-cols-xl-4">
        {visibleFilteredProducts.map((product, index) => (
          <div className="col mt-2" key={index}>
            <div className="card card-style rounded-4">
              <div className="image-container">
                <LazyLoadImage
                  src={`https://raw.githubusercontent.com/lautaro-arias/api-web-ecommerce/fed6f04e29238ba2217b20e65b150fb288943ce2/src/assets/produsctSeason/${product.img}`}
                  className="card-img-top img-product-components rounded-top-4"
                  alt="indumentaria"
                />
                <FontAwesomeIcon
                  className="p-2 mb-2 btn btn-outline-dark border border-dark rounded-5 icon-on-image"
                  type="button"
                  icon={faPlus}
                  title="Agregar al carrito"
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                  onClick={() => { handleClickAddProduct(product); handleClickAddOne(true); handleClickShow() }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title title">{product.nombre}</h3>
                <h6>
                  $ {product.precio}
                  <span className="ms-2 text-muted text-decoration-line-through">
                    ${product.rebaja}
                  </span>
                </h6>
                <div className="btn-group" role="group">
                  <a href='info' type="button"
                    data-bs-toggle="dropdown" title="Informacion">
                    <FontAwesomeIcon className=" mb-2 btn btn-dark border border-dark rounded-5" icon={faInfo} />
                  </a>
                  <ul className="dropdown-menu">
                    <li><h6 className="dropdown-item card-text text-success">En stock :</h6></li>
                    <li><small className="dropdown-item card-text">colores: {product.color}</small></li>
                    <li><small className="dropdown-item card-text ">talles: {product.talle}</small></li>
                    <li><small className="dropdown-item card-text ">tipo: {product.tipo}</small></li>
                  </ul>
                </div>
              </div>
              <small className="card-text text-muted mb-4">
                {product.descripcion}
              </small>
            </div>
          </div>
        ))}
        <div className="container mt-4">
          <button className="verMas rounded-5" title="Ver mas"
            onClick={handleShowMoreClick}> Ver más </button>
        </div>
      </div>
    </div>
  )
}
export default ProductsHome;