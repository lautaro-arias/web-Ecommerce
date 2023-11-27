import { faFacebookF, faInstagram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBuildingColumns, faCreditCard, faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DATAWEB from '../../assets/footer/DATAWEB.jpg'
import logomenu from '../../assets/logo/logomenu.png'
import './styles/footer.css'
import { LazyLoadImage } from "react-lazy-load-image-component"

const Footer = () => { 

  const tarjetasFooter = [
    "visa.png","mastercard.png", "amex.png","paypal.png","diners.png","cencosud.png",
    "maestro.png","argencard.png","banelco.png","cabal.png","nativa.png","tarjetanaranja.png",
    "tarjetashopping.png","rapipago.png","mercadopago.png","pagofacil.png",
  ]
  return (
    <>
    <div className="fondo-footer"> 
        <div className="fondo-footer2">
              <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5  p-5 border-top">
                      <div className="col mb-3 ">
                        <img src={ logomenu } className="logo" alt="logo" title="Logo Nous"/>
                      </div>
                    <div className="col mb-3">
                        <h5 className="text-black-50">Categorias</h5>
                        <ul className="nav flex-column">
                          <li className="nav-item mb-2"><a href="1" className="nav-link p-0 text-dark">Remeras</a></li>
                          <li className="nav-item mb-2"><a href="1" className="nav-link p-0 text-dark">Pantalones</a></li>
                          <li className="nav-item mb-2"><a href="1" className="nav-link p-0 text-dark">Camperas</a></li>
                          <li className="nav-item mb-2"><a href="1" className="nav-link p-0 text-dark">Busos</a></li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h5 className="text-black-50">Contacto</h5>
                        <ul className="nav flex-column">
                          <li className="nav-item mb-2"><a href="1" className="nav-link p-0 text-dark">nous@gmail.com</a></li>
                          <li className="nav-item mb-2"><a href="1" className="nav-link p-0 text-dark">2625453700</a></li>
                          <li className="nav-item mb-2"><a href="1" className="nav-link p-0 text-dark"> calle Figueroa Alcorta 7597, Barrio de Núñez, </a></li>
                        </ul>
                      </div>
                    <div className="col mb-3">
                        <h5 className="text-black-50">Redes</h5>
                        <ul className="nav flex-column">
                          <li className="nav-item mb-2"><a href="2" className="nav-link p-0 text-dark">
                            <FontAwesomeIcon className="me-4"icon={faInstagram} /> <FontAwesomeIcon className="me-4" icon={faXTwitter} />
                            <FontAwesomeIcon className="me-4" icon={faFacebookF} /><FontAwesomeIcon className="me-4" icon={faWhatsapp} /></a></li>
                        </ul>
                      </div>
                    <div className="col mb-3">
                        <h5 className="text-black-50">Pedios de pago</h5>
                        <ul className="nav flex-column">
                          <li className="nav-item mb-2"><a href="1" className="nav-link p-0 text-dark">Efectivo <FontAwesomeIcon icon={faDollarSign} /></a></li>
                          <li className="nav-item mb-2"><a href="1" className="nav-link p-0 text-dark">Aceptamos todas las tarjetas <FontAwesomeIcon icon={faCreditCard} /></a></li>
                          <li className="nav-item mb-2"><a href="1" className="nav-link p-0 text-dark"> Tranferencia bancaria <FontAwesomeIcon icon={faBuildingColumns} /> </a></li>
                        </ul>
                    </div>
                </footer>
                    <footer className="py-3 my-4 ">
                        <div className="row element-footer ">
                            <div className="col text-center"> 
                                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                                  { tarjetasFooter.map((tarjetas,index)=>(
                                    <li key={index} className="nav-item">
                                        <LazyLoadImage src={require(`../../assets/footer/${tarjetas}`)} 
                                        className="nav-link tarjeta-footer px-2"alt="visa"/>
                                      </li>
                                  ))}
                                </ul>
                            </div>
                        </div>
                          <ul className="nav justify-content-center   ">
                              <li  className="nav-item">
                                  <LazyLoadImage src={DATAWEB} className="nav-link tarjeta-footer px-2"alt="visa"/>
                                </li>
                          </ul>
                            <p className="text-center text-muted">© 2023 Nous,LLC</p>
                    </footer>
            </div>
      </div>
    </>
  )
}

export default Footer