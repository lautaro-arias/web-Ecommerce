import { faArrowLeft, faBagShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BuyingComponent,NoBuyingComponent } from './RenderComponent'
import { useCartProduct } from './handlers/cartHandler'
import './styles/cartOffcanvas.css'

const CartOffcanvas = () => {
  const { showOffCanvas}= useCartProduct()
  return (
          <div className="offcanvas offcanvas-end offcanvas w-30" tabindex-="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                      <h5 className="offcanvas-title border-bottom  border-dark" id="offcanvasRightLabel">Mis compras
                            <FontAwesomeIcon
                          className="p-2 ms-3 btn btn-outline-dark border border-white rounded-5 "
                          type="button"
                          icon={faBagShopping}
                          title="Mis compras"
                          /> 
                          </h5>
                        <button type="button" className="btn btn-outline-dark border border-dark rounded-5"
                          data-bs-dismiss="offcanvas" aria-label="Close">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                  </div>
                  {
                    showOffCanvas ? <BuyingComponent/> : <NoBuyingComponent/> 
                  }
            </div>
  )
}
export default CartOffcanvas



