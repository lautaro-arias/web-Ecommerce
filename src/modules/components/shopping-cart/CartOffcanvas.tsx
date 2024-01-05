import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BuyingComponent,NoBuyingComponent } from './RenderComponent'
import { useShoppingProduct } from './handlers/shoppingHandler'
import './styles/cartOffcanvas.css'

const CartOffcanvas = () => {
  const { showOffCanvas,cartItemCount}= useShoppingProduct()
  return (
          <div className="offcanvas offcanvas-end offcanvas w-30" tabindex-="-1" id="offcanvasRight"   data-bs-scroll="true" data-bs-backdrop="false" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header ">
                        <h5 className="offcanvas-title  border-1 border-bottom border-dark" id="offcanvasRightLabel">Mi lista
                              <span className=" top-0  mx-2 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartItemCount} 
                                </span>
                            </h5>
                              <FontAwesomeIcon type="button" className="btn btn-outline-dark border border-dark p-2 rounded-5"
                            data-bs-dismiss="offcanvas" aria-label="Close" icon={faArrowLeft} />
                  </div>
                  {
                    showOffCanvas ? <BuyingComponent/> : <NoBuyingComponent/> 
                  }
            </div>
  )
}
export default CartOffcanvas



