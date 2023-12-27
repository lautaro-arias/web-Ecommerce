import { usePayment } from "./handler/paymentHandler";
import { Wallet } from '@mercadopago/sdk-react';


const Payment = () => {
  const { orderData,preferenceId } = usePayment()
  return (
    <div>
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
    </div>
  );
};

export default Payment;
