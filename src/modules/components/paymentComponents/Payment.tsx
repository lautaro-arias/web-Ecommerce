
import { useShoppingProduct } from "../shopping-cart/handlers/shoppingHandler";
import { usePayment } from "./handler/paymentHandler";
import { Wallet } from '@mercadopago/sdk-react';
import FooterPay from "./FooterPay";


const Payment = () => {
  const { orderData,preferenceId } = usePayment()
  const { selectedProductsArray} = useShoppingProduct()

  return (
    <div className="container">
                            {selectedProductsArray.map((product,index) => ( 

                              <><div className="card mb-3 card-payment" key={index}>
                                  <div className="col-md-4">
                                  <div className="row g-0">
                                  <img src={`https://raw.githubusercontent.com/lautaro-arias/api-web-ecommerce/fed6f04e29238ba2217b20e65b150fb288943ce2/src/assets/produsctSeason/${product.img}`}
                                      className="img-fluid img-payment " alt="imgProducto" />
                                  </div>
                                  <div className="col-md-4">
                                    <div className="card-body">
                                      <h5 className="card-title">{product.nombre}</h5>
                                      <h5 className="card-title"> $ {product.precio}</h5>
                                      <h5 className="card-title">color: {product.color}</h5>
                                      <h5 className="card-title">talle: {product.talle}</h5>
                                    </div>
                                </div>
                                </div>

                              </div>
                              </>
                              ))}




                                {/* ESTO ES EL PRODUCT HOME COPIARLO  
                                
                                 <div className="container mb-4">
            <Categories handleFilter={handleFilter} />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  row-cols-xl-4">
                          { visibleFilteredProducts.map((product, index) => (
                        <div className="col mt-2" key={index}>
                              <div className="card rounded-4">
                                <div className="image-container">
                                <LazyLoadImage
                                        src={`https://raw.githubusercontent.com/lautaro-arias/api-web-ecommerce/fed6f04e29238ba2217b20e65b150fb288943ce2/src/assets/produsctSeason/${product.img}`}
                                        className="card-img-top img-product-components rounded-top-4"
                                        alt="indumentaria"
                                        /> 
                                        <FontAwesomeIcon
                                            className="p-2 mb-2 btn btn-outline-dark border border-dark rounded-5 icon-on-image"
                                            type="button"
                                            icon={faBagShopping}
                                            title="Agregar"
                                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                                            onClick={() => { handleClickAddProduct(product) ; handleClickAddOne(true); handleClickShow() } }
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
                                                <a href='info' type="button" title="Informacion" className="p-1 mb-2 btn btn-dark  border-secondary border-2 rounded-5 dropdown-toggle" 
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                info
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
                          <li className="btn btn-dark w-100 border border-secondary border-3 rounded-5" title="Ver mas" 
                          onClick={handleShowMoreClick}>Ver más</li>
                        </div>
              </div>
                          </div>
                                
                                
                                
                                
                                */}











      <div className="container_payment ">
        <div className="block-heading">
          <h2> PAYMENT COMPONENT</h2>
          <p>This is an example of a Mercado Pago integration</p>
        </div>
        <div className="form-payment bg-primary">
          <div className="products">
            <h2 className="title">Summary</h2>
            <div className="item">
              <span className="price" id="summary-price">${orderData.price}</span>
              <p className="item-name">
                Book X <span id="summary-quantity">{orderData.quantity}</span>
              </p>
            </div>
            <div className="total">
              Total
              <span className="price" id="summary-total">${orderData.amount}</span>
            </div>
          </div>
          <div className="payment-details">
            <div className="form-group col-sm-12">
              <button> 
                  <Wallet  initialization={{ preferenceId , redirectMode: 'blank' }} />
                  </button>
            </div>
          </div>
        </div>
      </div>
      <FooterPay/>
      </div>

  );
};

export default Payment;
