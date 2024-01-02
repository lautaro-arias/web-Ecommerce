import useMenuHandler from "../menu-offcanvas/handlers/menuHandler";
import { useShoppingProduct } from "./handlers/shoppingHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { usePayment } from "../paymentComponents/handler/paymentHandler";

        export const NoBuyingComponent = () => { 
            return (
                    <>
                    <div className="card fondo-offcanvas border-0  mt-3 bg-transparent">
                            <div className="card-body">
                            </div>
                        </div> 
                            <h6  className="text-dark mt-4 pointer" data-bs-dismiss="offcanvas" aria-label="Close">ir comprar</h6>
                            
                    </>
            )
        }

        export const BuyingComponent = () => { 
        const { selectedProductsArray,handleClickRemoveProduct,handleClickAddOne, handleQuantityChange,productQuantities,totalPrecios } = useShoppingProduct()
        const { toggleCollapse,isCollapsed }= useMenuHandler()
        const { handleClick } = usePayment()
        
        
        return ( 
                    <><div className="offcanvas-body">
                {selectedProductsArray.map((product, index) => (
                    <div className="card mb-3 rounded-2 " key={index}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <button type="button" className="btn btn-dark  border border-dark rounded-5 icon-close pointer">
                                    <FontAwesomeIcon icon={faXmark}
                                        onClick={() => { handleClickRemoveProduct(index); handleClickAddOne(false); } } />
                                </button>
                                <img
                                    src={`https://raw.githubusercontent.com/lautaro-arias/api-web-ecommerce/fed6f04e29238ba2217b20e65b150fb288943ce2/src/assets/produsctSeason/${product.img}`}
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
                                            title="Calcular envio" />
                                        <FontAwesomeIcon
                                            data-bs-toggle="collapse" href="#collapseRemera" role="button"
                                            aria-expanded="false" aria-controls="collapseRemera"
                                            type="button"
                                            className={`ms-2 btn btn-dark p-0 rounded-5 ${isCollapsed ? '' : 'd-none'}`}
                                            icon={faChevronUp}
                                            onClick={toggleCollapse} /></h4>
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
                                <ul className="list-group list-group-flush text-start">
                                    <li className="list-group-item d-flex justify-content-between">Cantidad
                                        <input className=" text-center border border-dark  border-top-0 border-start-0 border-end-0 w-50"
                                            type="number"
                                            defaultValue={1}  
                                            value={productQuantities[index]}
                                            min={1}
                                            onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}></input>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">Total
                                        <h6 className="text-decoration-none text-dark border border-dark  border-top-0 border-start-0 border-end-0 text-center  w-50">
                                        ${product.precio * productQuantities[index]}
                                            </h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>

                ))}
                <div>
                    <h4 className=" mt-2 mb-3 p-2 bg-success bg-opacity-10 border border-success  rounded-3">Total :  $ { totalPrecios }</h4>
                </div>
                <Link to={'/payment'} className="btn btn-dark w-100 border border-secondary border-3 rounded-5 mb-3"
                    title="Comprar" type="button" onClick={handleClick}>
                    Comprar
                </Link>

                <a className="text-dark " data-bs-dismiss="offcanvas" aria-label="Close" href="close">Seguir comprando</a>
            </div>
                </>
        )
    }




