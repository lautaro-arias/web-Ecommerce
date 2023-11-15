import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronDown } from '@fortawesome/free-solid-svg-icons';
import useAllProductHandler from './handler/productsAll'
import './styles/productHome.css'

const ProductsHome = () => {
  const{
    showAll, 
    toggleCards,
    visibleCards,
  } = useAllProductHandler()

  return (
    <div className="container mb-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  row-cols-xl-4">
              { visibleCards.map((products,index) => ( 
              <div className="col mt-2" key={index}>
                  <div className="card">
                    <img  src={require(`../../assets/produsctSeason/${products.img}`)} className="card-img-top img-product-components" alt="indumentaria"/>
                      <div className="card-body">
                          <FontAwesomeIcon className=" p-2 mb-2 btn btn-outline-dark border border-dark rounded-5" type="button" icon={faBagShopping} />
                        <h5 className="card-title title">{products.nombre}</h5>
                          <h6>{products.precio}
                          <span className="ms-2 text-muted text-decoration-line-through">{products.rebaja}</span></h6>
                        <small className="card-text text-muted">{products.descripcion}</small>
                      </div>
                  </div>
                </div>
                
              ))}
                <div className="d-flex justify-content-center text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden text-dark">Loading...</span>
                  </div>
              </div>
              <div className="container mt-4 btn btn-outline-dark rounded-4 p-0 " onClick={toggleCards}> 
                    {showAll ? 'Ver menos' : 'Ver más'}
                  <FontAwesomeIcon
                    type="button" className='ms-2' icon={faChevronDown}  />  
                </div>
              
          </div>
    </div>
  )
}

export default ProductsHome