import { faArrowLeft, faBagShopping, faChevronDown, faChevronUp, faTruck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/cartOffcanvas.css'
import useMenuHandler from '../menu-offcanvas/handlers/menuHandler'
import useCartProduct from './handlers/cartProduct'

const CartOffcanvas = () => {

  const { newProductCart} = useCartProduct()
  const{ toggleCollapse,isCollapsed }= useMenuHandler()
  return (

        <div className="offcanvas offcanvas-end offcanvas w-30" tabindex-="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                      <h5 className="offcanvas-title border-bottom  border-dark" id="offcanvasRightLabel">Mis compras 
                            <FontAwesomeIcon className="p-2 m-2 btn btn-outline-dark border border-white rounded-5 "
                            icon={faBagShopping} title="Mis compras"/>
                          </h5>
                        <button type="button" className="btn btn-outline-dark border border-dark rounded-5"
                          data-bs-dismiss="offcanvas" aria-label="Close">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                  </div>
                <div className="offcanvas-body">
                  {  newProductCart.map((Products,index) => ( 
                    <div className="card mb-3 rounded-2"key={index} >
                          <div className="row g-0">
                                <div className="col-md-4">
                                        <button type="button" className="btn btn-dark  border border-dark rounded-5 icon-close">
                                          <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                        {/*<img src={''} className="img-fluid  img-card-carro" alt="imgProducto" />*/}
                                </div>
                              <div className="col-md-8 position-relative">
                                  <div className="card-body">
                                      <h6 className="card-title text-start">{Products.tipo}</h6>
                                      <ul className="list-group list-group-flush text-start">
                                        <li className="list-group-item"><small className="text-start text-muted ">talle :{Products.talle}</small></li>
                                        <li className="list-group-item"><small className="text-start text-muted">color :{Products.color}</small></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className='card-footer border border-top-0 bg-white'>
                                  <ul  className="list-group list-group-flush text-start">
                                          <li className="list-group-item d-flex justify-content-between">Cantidad
                                              <input className="rounded-4 text-center border  border-1 w-50" type="number"></input>
                                          </li>
                                            <li className="list-group-item d-flex justify-content-between">Sub total
                                                <input className="rounded-4 text-center border  border-1 w-50" type="text"></input>
                                            </li>
                                              <li className="list-group-item">
                                                    Envio  
                                                    <FontAwesomeIcon
                                                    data-bs-toggle="collapse" href="#collapseExample" role="button" 
                                                    aria-expanded="false" aria-controls="collapseExample"
                                                    type="button"
                                                    className={`ms-2 btn btn-dark p-0 rounded-5 ${isCollapsed ? 'd-none' : ''}`}
                                                    icon={faChevronDown}
                                                    onClick={toggleCollapse}
                                                    title="Calcular envio"
                                                    />
                                                    <FontAwesomeIcon
                                                      data-bs-toggle="collapse" href="#collapseExample" role="button" 
                                                      aria-expanded="false" aria-controls="collapseExample"
                                                      type="button"
                                                      className={`ms-2 btn btn-dark p-0 rounded-5 ${isCollapsed ? '' : 'd-none'}`}
                                                      icon={faChevronUp}
                                                      onClick={toggleCollapse}
                                                      />
                                              </li>
                                          <div className="collapse " id="collapseExample">
                                              <div className="card card-body border border-0 mb-2 ">
                                                  <span className=" text-center"> Calcular costo de envio <FontAwesomeIcon icon={faTruck} /></span>
                                                <div className="input-group mb-3 mt-4">
                                                    <input type="text" className="form-control rounded-5 border border-dark " placeholder="Codigo postal" />
                                                      <span className="input-group-text bg-dark text-white rounded-5">=</span>
                                                    <button type="button" className=" btn btn-outline-dark form-control rounded-5" >Calcular</button>
                                                  </div>
                                              </div>
                                          </div>
                                            <li className="list-group-item d-flex justify-content-between">Total
                                              <input className="rounded-4 border text-center  border-1 w-50" type="text"></input>
                                            </li>
                                      </ul>
                                </div>
                          </div>
                    </div>
                  ))}
                  <li className="btn btn-dark w-100 border border-secondary border-3 rounded-5 mb-3" title="Comprar"> 
                    Comprar
                  </li>
                  <a className="text-dark "  data-bs-dismiss="offcanvas" aria-label="Close" href="close">Seguir comprando</a>
            </div>
    </div>
  )
}

export default CartOffcanvas

