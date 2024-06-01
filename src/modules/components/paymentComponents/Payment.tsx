import { useShoppingProduct } from "../shopping-cart/handlers/shoppingHandler";
import { usePayment } from "./handler/paymentHandler";
import { Wallet } from '@mercadopago/sdk-react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar, faInfo, faUser } from "@fortawesome/free-solid-svg-icons";
import logomenu from "../../assets/logo/logomenu.webp";
import FooterPay from "./FooterPay";

const Payment = () => {
  const { preferenceId, formData } = usePayment();
  const { selectedProductsArray, productQuantities, totalPrecios } = useShoppingProduct();

  return (
    <>
      <div>
        <nav className="navbar bg-white navbar-expand-lg p-3 ">
          <div className="container-fluid text-center">
            <div className="col">
              <img src={logomenu} alt="Logo" width="100" height="90" className="rounded-0" />
            </div>
          </div>
        </nav>
        <div className="bg-dark text-white">Gracias {formData.nombre} por tu compra !!!  </div>
      </div>
      <div className="container  mb-4">
        <div className="row row-cols-2 row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 ">
          {selectedProductsArray.map((product:any, index) => (
            <div className="container col mt-2" key={index}>
              <div className="card card-style-2 mt-3 mb-4 me-2 justify-content-center rounded-4 ">
                <div className="image-container">
                  <LazyLoadImage
                    src={`https://raw.githubusercontent.com/lautaro-arias/api-web-ecommerce/fed6f04e29238ba2217b20e65b150fb288943ce2/src/assets/produsctSeason/${product.img}`}
                    className="img-fluid img-payment rounded-top-4 " alt="imgProducto"
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title title">{product.nombre}</h3>
                  <h6>
                    $ {product.precio}
                  </h6>
                  <div className="btn-group" role="group">
                    <a href='info' type="button"
                      data-bs-toggle="dropdown" title="Informacion">
                      <FontAwesomeIcon className=" mb-2 btn btn-dark border border-dark rounded-5" icon={faInfo} />
                    </a>
                    <ul className="dropdown-menu">
                      <li><h6 className="dropdown-item card-text text-success">En stock :</h6></li>
                      <li><small className="dropdown-item card-text">colores: {product.color}</small></li>
                      <li><small className="dropdown-item card-text ">talles: {product.talle}</small></li>
                      <li><small className="dropdown-item card-text ">tipo: {product.tipo}</small></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container col-md-8 col-lg-8 col-xl-12">
          <div className="card text-center mt-4 justify-content-center">
            <div className="card-header">
              Datos del comprador <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="card-body"  >
              <ul>
                <li className="list-group-item">{formData.nombre} {formData.apellido}</li>
                <li className="list-group-item">{formData.provincia} / {formData.ciudad} / {formData.direccion}</li>
                <li className="list-group-item">{formData.gmail} / {formData.telefono}</li>
              </ul>
            </div>
          </div>
          <div className="card text-center mt-4 mb-4 justify-content-center">
            <div className="card-header">
              Importes <FontAwesomeIcon icon={faFileInvoiceDollar} />
            </div>
            <div className="card-body"  >
              <div className="d-flex flex-wrap justify-content-center">
                {selectedProductsArray.map((product, index) => (
                  <div className="mb-3 " key={index} >
                    <ul className="list-group d-grid ">
                      <li className="list-group-item importe m-2 rounded-1">
                        {product.nombre} : $ {product.precio * productQuantities[index]} <br /> unidades : {productQuantities[index]}</li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="container text-center col col-md-10 col-lg-8 col-xl-4 ">
                <h5 className=" mt-2 mb-3 p-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
                  Envio :  Gratis </h5>
                <h5 className=" mt-2 mb-3 p-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
                  Total :  $ {totalPrecios}</h5>
                <Wallet initialization={{ preferenceId, redirectMode: 'blank' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPay />
    </>
  );
};
export default Payment;
