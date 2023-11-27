import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cartProducts = () => {
return (
    <> 
        <div className="position-relative  ">
                <FontAwesomeIcon
                    className="p-2  btn btn-outline-dark border border-dark rounded-5 dropdown-toggle"
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                    type="button"
                    icon={faBagShopping}
                    title="Mis compras"
                    />
                    <span className=" top-0 me-4  start-100 translate-middle badge rounded-pill bg-danger">
                    0
                        <span className="visually-hidden ">unread messages</span>
                    </span>
        </div>
        
    </>
)
}

export default cartProducts