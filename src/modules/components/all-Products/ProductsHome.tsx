import { faBagShopping, faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/productHome.css'
import Categories from '../categories/Categories'
import useFilterProduct from '../categories/handlers/filterProduct'

const ProductsHome = () => {

  const { filteredProducts ,handleFilter}= useFilterProduct()

  return (
    <div className="container mb-4">

        <Categories handleFilter={handleFilter} />

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  row-cols-xl-4">
                      { filteredProducts.map((product, index) => (
                    <div className="col mt-2" key={index}>
                      <div className="card">
                        <img
                          src={`https://raw.githubusercontent.com/lautaro-arias/api-web-ecommerce/fed6f04e29238ba2217b20e65b150fb288943ce2/src/assets/produsctSeason/${product.img}`}
                          className="card-img-top img-product-components"
                          alt="indumentaria"
                        />
                        <div className="card-body">
                          <FontAwesomeIcon
                            className="p-2 mb-2 btn btn-outline-dark border border-dark rounded-5"
                            type="button"
                            icon={faBagShopping}
                          />
                          <h5 className="card-title title">{product.nombre}</h5>
                          <h6>
                            $ {product.precio}
                            <span className="ms-2 text-muted text-decoration-line-through">
                              ${product.rebaja}
                            </span>
                          </h6>
                          
                          <div className="btn-group" role="group">
                              <a type="button" className="p-1 mb-2 btn btn-outline-dark border border-dark rounded-5 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              info
                              </a>
                              <ul className="dropdown-menu">
                                <li><small className="dropdown-item card-text text-success">En stock :</small></li>
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
                  
          </div>
    </div>
  )
}

export default ProductsHome