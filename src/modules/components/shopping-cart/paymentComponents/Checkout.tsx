import { usePayment } from "../handlers/paymentHandler";
import product from "../../../assets/img/product.png"


const Checkout = () => {
  const { updatePrice,orderData,handleClick } = usePayment()

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
                            alt="Image of a product"
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
    </section>
  );
};

export default Checkout;
