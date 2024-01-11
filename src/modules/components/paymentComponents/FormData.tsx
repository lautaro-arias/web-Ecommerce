import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePayment } from './handler/paymentHandler';
import './styles/paymentComponets.css';

const FormData = () => {
    const { handleSubmit, validated,handleChange,formData } = usePayment();
    
return (
    <div className="fondo-login ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 ">
            <div className="form-login p-4 border border-white rounded-0  ">
            <h4  className='text-white'> Datos del usuario </h4>
                <form className={`p-2 needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
                    <div className="row ">
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustom01" className="form-label text-white">Nombre</label>
                                <input type="text" className="form-control bg-transparent text-white  inputs " 
                                    id="nombre" 
                                    minLength={2} 
                                    maxLength={10}  
                                    value={formData.nombre}
                                    onChange={handleChange} 
                                    required  
                                    />
                                <div className="valid-feedback">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    </div>
                            </div>
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustom02" className="form-label text-white">Apellido</label>
                                <input type="text" className="form-control bg-transparent text-white  inputs" 
                                    id="apellido" 
                                    minLength={2} 
                                    maxLength={10} 
                                    value={formData.apellido}
                                    onChange={handleChange} 
                                    required 
                                    />
                                <div className="valid-feedback">
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </div>
                            </div>
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustomgmail" className="form-label text-white">Gmail</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text bg-transparent text-white  inputs" id="inputGroupPrepend">@</span>
                                    <input type="text" className="form-control bg-transparent text-white  inputs"  aria-describedby="inputGroupPrepend" 
                                        id="gmail"
                                        minLength={12} 
                                        maxLength={30} 
                                        value={formData.gmail}
                                        onChange={handleChange}
                                        required 
                                        />
                                    <div className="invalid-feedback">
                                        Proporcione un correo valido.
                                        </div>
                                    <div className="valid-feedback">
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                        </div>
                                </div>
                            </div>
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustom03" className="form-label text-white">telefono</label>
                                <input type="number" className="form-control bg-transparent text-white  inputs" 
                                    id="telefono" 
                                    minLength={10} 
                                    maxLength={15} 
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    required 
                                    />
                                    <div className="invalid-feedback">
                                        Numero incorrecto.
                                        </div>
                                    <div className="valid-feedback">
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                        </div>
                            </div>   
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustom03" className="form-label text-white">Provincia</label>
                                <input type="text" className="form-control bg-transparent text-white  inputs"
                                    id="provincia"
                                    minLength={5} 
                                    maxLength={20} 
                                    value={formData.provincia}
                                    onChange={handleChange}
                                    required 
                                    />
                                <div className="invalid-feedback">
                                    Proporcione una provincia valida.
                                    </div>
                                <div className="valid-feedback">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    </div>
                            </div>
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustom04" className="form-label text-white ">Ciudad</label>
                                <input type="text" className="form-control bg-transparent text-white  inputs"
                                    id="ciudad"
                                    minLength={5} 
                                    maxLength={20} 
                                    value={formData.ciudad}
                                    onChange={handleChange}
                                    required 
                                    />
                            </div>
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustom03" className="form-label text-white">Direccion</label>
                                <input type="text" className="form-control bg-transparent text-white  inputs"
                                    id="direccion" 
                                    minLength={10} 
                                    maxLength={30} 
                                    value={formData.direccion}
                                    onChange={handleChange}
                                    required 
                                    />
                                <div className="invalid-feedback">
                                    Dirreccion incorrecta.
                                    </div>
                                <div className="valid-feedback">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    </div>
                            </div>
                        <div className=" col-md-6  mb-4">
                            <label htmlFor="validationCustom05" className="form-label text-white">Codigo postal</label>
                                <input type="number" className="form-control bg-transparent text-white  inputs"
                                id="codigoPostal" 
                                    minLength={3} 
                                    maxLength={4}
                                    value={formData.codigoPostal}
                                    onChange={handleChange}
                                    required 
                                    />
                                <div className="invalid-feedback">
                                    Codifo postal incorrecto.
                                    </div>
                                <div className="valid-feedback">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    </div>
                        </div>
                        <div className="col-12 col-lg-4 container">
                            <div className="form-check ">
                                <input className="form-check-input" type="checkbox"  
                                    id="aceptaTerminos" 
                                    value={formData.aceptaTerminos}
                                    onChange={handleChange} 
                                    required 
                                    />
                                    <label className="form-check-label text-white" htmlFor="invalidCheck">
                                        Acepta terminos y condiciones
                                        </label>
                                    <div className="invalid-feedback">
                                        Debe aceptar los terminos y condiciones para seguir.
                                    </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button
                                className="btn btn-light bg-transparent text-white rounded-0 mt-4"
                                type="submit"
                                >
                                ¡ Pagar !
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default FormData;