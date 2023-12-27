import { usePayment } from "./handler/paymentHandler";
import product from "../../../assets/img/product.png"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faChevronDown, faChevronUp, faTruck, faXmark } from "@fortawesome/free-solid-svg-icons";
//import useMenuHandler from "../../menu-offcanvas/handlers/menuHandler";
//import { useCartProduct } from "../handlers/shoppingHandler";
//import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";


const Checkout = () => {
  const { updatePrice,orderData,handleClick } = usePayment()
  //const { toggleCollapse,isCollapsed }= useMenuHandler()
  //const { handleClickBuyin,buyinProduct }= usePayment()
  //const { handleClickRemoveProduct} = useCartProduct()



  return (
    <section >
      <div className="container" id="container bg-danger">
        <div className="block-heading">
          <h2>CHECKOUT COMPONET </h2>
          <p>This is an example of Checkout Pro integration of Mercado Pago</p>
        </div>
        <div className="content bg-danger">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="items">
                <div className="product">
                  <div className="info">
                    <div className="product-details">
                      <div className="row justify-content-md-center">
                        <div className="col-md-3">
                          <img
                            className="img-fluid mx-auto d-block image"
                            alt=" product"
                            src={product}
                          />
                        </div>
                        <div className="col-md-4 product-detail">
                          <h5>Product</h5>
                          <div className="product-info">
                            <b>Description: </b>
                            <span id="product-description">Some book</span>
                            <br />
                            <b>Author: </b>Dale Carnegie
                            <br />
                            <b>Number of pages: </b>336
                            <br />
                            <b>Price:</b> $ <span id="unit-price">10</span>
                            <br />
                          </div>
                        </div>
                        <div className="col-md-3 product-detail">
                          <label htmlFor="quantity">
                            <b>Quantity</b>
                          </label>
                          <input
                            onChange={updatePrice}
                            type="number"
                            id="quantity"
                            value={orderData.quantity}
                            min="1"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="summary">
                <h3>Cart</h3>
                <div className="summary-item">
                  <span className="text">Subtotal</span>
                  <span className="price" id="cart-total">${orderData.amount}</span>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="button"
                  onClick={handleClick}
                  id="checkout-btn"
                >
                  Ir a payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="offcanvas-body">
                        { buyinProduct.map((product:any,index:any) => ( 
                        <div className="card mb-3 rounded-2 "key={index}  >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                            <button type="button" className="btn btn-dark  border border-dark rounded-5 icon-close">
                                                <FontAwesomeIcon icon={faXmark} 
                                                onClick={() => { handleClickRemoveProduct(index); }} 
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
                                                    <input className=" text-center border border-dark  border-top-0 border-start-0 border-end-0 w-50" type="number" defaultValue={1} min={1}></input>
                                                </li>
                                                    <li className="list-group-item d-flex justify-content-between">Sub total
                                                        <h6 className="text-decoration-none text-dark text-center border border-dark  border-top-0 border-start-0 border-end-0 w-50" >{product.precio}</h6>
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
                                                    <h6 className="text-decoration-none text-dark border border-dark  border-top-0 border-start-0 border-end-0 text-center  w-50" >{product.precio}</h6>
                                                </li>
                                            </ul>
                                    </div>
                                </div>
                        </div>
                        ))}
                        <a className="text-dark "  data-bs-dismiss="offcanvas" aria-label="Close" href="close">Seguir comprando</a>

                        </div>*/}




    </section>
  );
};

export default Checkout;
