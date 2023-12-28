import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useShoppingProduct} from './handlers/shoppingHandler'

const IconCart = () => {

const { cartItemCount } =useShoppingProduct()

return (
    <>
        <div className="position-relative">
                    <FontAwesomeIcon
                    className="p-2  btn btn-outline-dark border border-dark rounded-5 "
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                    type="button"
                    icon={faBagShopping}
                    title="Mis compras"
                    />
                    <span className=" top-0 me-4  start-100 translate-middle badge rounded-pill bg-danger">
                        {cartItemCount} 
                        <span className="visually-hidden ">unread messages</span>
                    </span>
                    
        </div>
        </>
)
}
export default IconCart