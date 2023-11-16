import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useAllProductHandler from './handler/productsAll'
import './styles/productHome.css'

const ProductsHome = () => {
  const{

    allProducts

  } = useAllProductHandler()

  return (
    <div className="container mb-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  row-cols-xl-4">
                      {allProducts.map((product, index) => (
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
                          <small className="card-text text-muted">
                            {product.descripcion}
                          </small>
                          <small className="card-text text-muted">{product.color}</small>
                          <small className="card-text text-muted">{product.talle}</small>
                          <small className="card-text text-muted">{product.tipo}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                    
          {/*<div className="container mt-4 btn btn-outline-dark rounded-4 p-0 " onClick={toggleCards}> 
                    {showAll ? 'Ver menos' : 'Ver más'}
                  <FontAwesomeIcon
                    type="button" className='ms-2' icon={faChevronDown}  />  
                    </div>*/}
                </div>
    </div>
  )
}

export default ProductsHome