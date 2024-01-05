import { useShoppingProduct } from "./handlers/shoppingHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { usePayment } from "../paymentComponents/handler/paymentHandler";
import { LazyLoadImage } from "react-lazy-load-image-component";

        export const NoBuyingComponent = () => { 
            return (
                    <>
                    <div className="card fondo-offcanvas border-0  mt-3 bg-transparent">
                            <div className="card-body"></div>
                        </div> 
                            <h6  className="text-dark mt-4 pointer" data-bs-dismiss="offcanvas" aria-label="Close">ir comprar</h6>
                    </>
            )
        }

        export const BuyingComponent = () => { 
        const { handleClick } = usePayment()
        const { selectedProductsArray,handleClickRemoveProduct, handleClickAddOne, 
            handleQuantityChange,productQuantities,totalPrecios } = useShoppingProduct()
        
        return ( 
        <div className="offcanvas-body">
                        {selectedProductsArray.map((product, index) => (
                        <div className="col mt-2" key={index}>
                                <div className="card rounded-4">
                                        <div className="image-container">
                                                <LazyLoadImage
                                                    src={`https://raw.githubusercontent.com/lautaro-arias/api-web-ecommerce/fed6f04e29238ba2217b20e65b150fb288943ce2/src/assets/produsctSeason/${product.img}`}
                                                    className="card-img-top img-product-components rounded-top-4"
                                                    alt="indumentaria"
                                                    /> 
                                                <FontAwesomeIcon title="Eliminar" className="p-2 mb-2 btn btn-outline-dark border border-dark rounded-5  icon-on-image" icon={faTrash} 
                                                    onClick={() => { handleClickRemoveProduct(index); handleClickAddOne(false); } } 
                                                    />
                                            </div>
                                        <div className="card-body">
                                                <h3 className="card-title title">{product.nombre}</h3>
                                                <h6>
                                                    $ {product.precio}
                                                </h6>
                                            </div>
                                        <div className='card-footer border border-top-0 bg-white'>
                                            <ul className="list-group list-group-flush text-start">
                                                <li className="list-group-item d-flex justify-content-between">Cantidad
                                                        <input className=" text-center border border-dark  border-top-0 border-start-0 border-end-0 w-50"
                                                            type="number"
                                                            defaultValue={1}  
                                                            value={productQuantities[index]}
                                                            min={1}
                                                            onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                                            />
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
)
}
