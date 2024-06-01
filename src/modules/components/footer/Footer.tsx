import { faFacebookF, faInstagram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBuildingColumns, faCreditCard, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DATAWEB from '../../assets/footer/DATAWEB.webp';
import logomenu from '../../assets/logo/logo2.jpeg';
import './styles/footer.css';

const Footer = () => {

  const tarjetasFooter = [
    "visa.webp", "mastercard.webp", "amex.webp", "paypal.webp", "diners.webp", "cencosud.webp",
    "maestro.webp", "argencard.webp", "banelco.webp", "cabal.webp", "nativa.webp", "tarjetanaranja.webp",
    "tarjetashopping.webp", "rapipago.webp", "mercadopago.webp", "pagofacil.webp",
  ]
  return (
    <div className="fondo-footer">
      <div className="fondo-footer2">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5  p-5 border-top">
          <div className="col mb-3 rounded-5">
            <img src={logomenu} className="logo Logofooter " alt="logo" title="Logo Nous" />
          </div>
          <div className="col mb-3">
            <h5 className="text-black-50">Categorias</h5>
            <ul className="nav flex-column">
              <li className="mb-1 nav-link p-0 text-dark">Remeras</li>
              <li className="mb-1 nav-link p-0 text-dark">Pantalones</li>
              <li className="mb-1 nav-link p-0 text-dark">Camperas</li>
              <li className="mb-1 nav-link p-0 text-dark">Busos</li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className="text-black-50">Contacto</h5>
            <ul className="nav flex-column">
              <li className="mb-1 nav-link p-0 text-dark">nous@gmail.com</li>
              <li className="mb-1 nav-link p-0 text-dark">2625453700</li>
              <li className="mb-1 nav-link p-0 text-dark"> calle Figueroa Alcorta 7597, Barrio de Núñez,</li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className="text-black-50">Redes</h5>
            <ul className="nav flex-column">
              <li className="nav-link pointer-none p-0 text-dark">
                <FontAwesomeIcon className="me-4" icon={faInstagram} /> <FontAwesomeIcon className="me-4" icon={faXTwitter} />
                <FontAwesomeIcon className="me-4" icon={faFacebookF} /><FontAwesomeIcon className="me-4" icon={faWhatsapp} />
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className="text-black-50">Medios de pago</h5>
            <ul className="nav flex-column">
              <li className="mb-1 nav-link p-0 text-dark">Efectivo <FontAwesomeIcon icon={faDollarSign} /></li>
              <li className="mb-1 nav-link p-0 text-dark">Aceptamos todas las tarjetas <FontAwesomeIcon icon={faCreditCard} /></li>
              <li className="mb-1 nav-link p-0 text-dark"> Tranferencia bancaria <FontAwesomeIcon icon={faBuildingColumns} /></li>
            </ul>
          </div>
        </div>
        <div className="py-3 my-4 ">
          <div className="row element-footer ">
            <div className="col text-center">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                {tarjetasFooter.map((tarjetas, index) => (
                  <li key={index} className="nav-item">
                    <LazyLoadImage src={require(`../../assets/footer/${tarjetas}`)}
                      className="nav-link tarjeta-footer px-2" alt="tarjeta" title="tarjeta" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="nav justify-content-center   ">
            <li className="nav-item">
              <LazyLoadImage src={DATAWEB} className="nav-link tarjeta-footer px-2" />
            </li>
          </ul>
          <p className="text-center text-muted">© 2023 Nous,LLC</p>
        </div>
      </div>
    </div>
  )
}
export default Footer;