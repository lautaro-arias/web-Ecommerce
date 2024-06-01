import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalCard = () => {
  return (
    <div className="modal fade" id="exampleModal" tabindex-="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content  ">
          <div className="modal-header bg-dark rounded-3 border border-white border-3 justify-content-center">
            <h1 className="modal-title text-white fs-5" id="exampleModalLabel">Agregado a mis compras
              <FontAwesomeIcon className="p-2 m-2 text-white btn btn-outline-dark border border-white rounded-5 "
                icon={faBagShopping} title="Mis compras" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModalCard;