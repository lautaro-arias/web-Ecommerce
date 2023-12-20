import useMenuHandler from "../menu-offcanvas/handlers/menuHandler";
import { useCartProduct } from "./handlers/cartHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faTruck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


///COMPLETAR LOS INPUTS CON LOS DATOS EXTRAIDOS DE EL cardProduct seleccionado 
//manejar esos datos segun se necesite

    export const NoBuyingComponent = () => { 
        initMercadoPago('TEST-4268166246905557-121907-d80f0d8df86261eeb064acc9165d864e-338813628')

        return (
                <>
                <div className="card fondo-offcanvas border-0  mt-3 bg-transparent">
                        <div className="card-body">
                        </div>
                    </div> 
                        <a className="text-dark mt-4" data-bs-dismiss="offcanvas" aria-label="Close" href="close">ir comprar</a>
                        <div id="wallet_container">  
                        </div>
                        <Wallet initialization={{ preferenceId: '7671113606844887' }} />
                </>
        )
    }

        export const BuyingComponent = () => { 
            
        const { selectedProductsArray,handleClickRemoveProduct,handleClickAddOne} = useCartProduct()
        const { toggleCollapse,isCollapsed }= useMenuHandler()
        return ( 
                    <div className="offcanvas-body">
                        {  selectedProductsArray.map((product,index) => ( 
                        <div className="card mb-3 rounded-2 "key={index}  >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                            <button type="button" className="btn btn-dark  border border-dark rounded-5 icon-close">
                                                <FontAwesomeIcon icon={faXmark} 
                                                onClick={() => { handleClickRemoveProduct(index); handleClickAddOne(false)  }} 
                                                />
                                            </button>
                                            <img src={`https://raw.githubusercontent.com/lautaro-arias/api-web-ecommerce/fed6f04e29238ba2217b20e65b150fb288943ce2/src/assets/produsctSeason/${product.img}`} 
                                            className="img-fluid  img-card-carro" alt="imgProducto" />
                                        </div>
                                    <div className="col-md-8 position-relative">
                                        <div className="card-body">
                                            <h4 className="card-title title text-start">{product.nombre} 
                                                        <FontAwesomeIcon
                                                        data-bs-toggle="collapse" href="#collapseRemera" role="button" 
                                                        aria-expanded="false" aria-controls="collapseRemera"
                                                        type="button"
                                                        className={`ms-2 btn btn-dark p-0 rounded-5 ${isCollapsed ? 'd-none' : ''}`}
                                                        icon={faChevronDown}
                                                        onClick={toggleCollapse}
                                                        title="Calcular envio"
                                                        />
                                                        <FontAwesomeIcon
                                                            data-bs-toggle="collapse" href="#collapseRemera" role="button" 
                                                            aria-expanded="false" aria-controls="collapseRemera"
                                                            type="button"
                                                            className={`ms-2 btn btn-dark p-0 rounded-5 ${isCollapsed ? '' : 'd-none'}`}
                                                            icon={faChevronUp}
                                                            onClick={toggleCollapse}
                                                            /></h4>
                                                    <div className="collapse " id="collapseRemera">
                                                        <div className="card card-body border border-0 mb-2 ">
                                                            <ul className="list-group list-group-flush text-start">
                                                                <li className="list-group-item"><small className="text-start text-muted ">talle: {product.talle}</small></li>
                                                                <li className="list-group-item"><small className="text-start text-muted">color: {product.color}</small></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                        </div>
                                    </div>
                                    <div className='card-footer border border-top-0 bg-white'>
                                        <ul  className="list-group list-group-flush text-start">
                                                <li className="list-group-item d-flex justify-content-between">Cantidad
                                                    <input className=" text-center border border-dark  border-top-0 border-start-0 border-end-0 w-50" type="number"></input>
                                                </li>
                                                    <li className="list-group-item d-flex justify-content-between">Sub total
                                                        <input className=" text-center border border-dark  border-top-0 border-start-0 border-end-0 w-50" type="text"></input>
                                                    </li>
                                                    <li className="list-group-item">
                                                        Envio  
                                                        <FontAwesomeIcon
                                                        data-bs-toggle="collapse" href="#collapseEnvio" role="button" 
                                                        aria-expanded="false" aria-controls="collapseEnvio"
                                                        type="button"
                                                        className={`ms-2 btn btn-dark p-0 rounded-5 ${isCollapsed ? 'd-none' : ''}`}
                                                        icon={faChevronDown}
                                                        onClick={toggleCollapse}
                                                        title="Calcular envio"
                                                        />
                                                        <FontAwesomeIcon
                                                            data-bs-toggle="collapse" href="#collapseEnvio" role="button" 
                                                            aria-expanded="false" aria-controls="collapseEnvio"
                                                            type="button"
                                                            className={`ms-2 btn btn-dark p-0 rounded-5 ${isCollapsed ? '' : 'd-none'}`}
                                                            icon={faChevronUp}
                                                            onClick={toggleCollapse}
                                                            />
                                                    </li>
                                                <div className="collapse " id="collapseEnvio">
                                                    <div className="card card-body border border-0 mb-2 ">
                                                        <span className=" text-center"> Calcular costo de envio <FontAwesomeIcon icon={faTruck} /></span>
                                                        <div className="input-group mb-3 mt-4">
                                                            <input type="text" className="form-control border border-dark  rounded-5" placeholder="Codigo postal" />
                                                                <span className="input-group-text bg-dark text-white rounded-5">=</span>
                                                                <button type="button" className=" btn btn-outline-dark form-control rounded-5" >Calcular</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <li className="list-group-item d-flex justify-content-between">Total
                                                    <input className="border border-dark  border-top-0 border-start-0 border-end-0 text-center  w-50" type="text"></input>
                                                </li>
                                            </ul>
                                    </div>
                                </div>
                        </div>
                        ))}
                        <li className="btn btn-dark w-100 border border-secondary border-3 rounded-5 mb-3" title="Comprar"> 
                            comprar
                        </li>
                        <a className="text-dark "  data-bs-dismiss="offcanvas" aria-label="Close" href="close">Seguir comprando</a>
            </div>
        )
    }


