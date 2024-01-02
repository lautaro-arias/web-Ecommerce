import { usePayment } from './handler/paymentHandler';
import './styles/paymentComponets.css';

const FormData = () => {
    const { handleSubmit, validated } = usePayment();
    
return (
    <div className="fondo-login ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 ">
            <div className="form-login p-4 border border-white rounded-0  ">
            <h4  className='text-white'> Datos del usuario </h4>
                <form className={`p-2 needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
                    <div className="row ">
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustom01" className="form-label text-white  ">Nombre</label>
                            <input type="text" className="form-control bg-transparent text-white  inputs " id="validationCustom01" required  />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustom02" className="form-label text-white">Apellido</label>
                            <input type="text" className="form-control bg-transparent text-white  inputs" id="validationCustom02"  required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustomgmail" className="form-label text-white">Gmail</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text bg-transparent text-white  inputs" id="inputGroupPrepend">@</span>
                                <input type="text" className="form-control bg-transparent text-white  inputs" id="validationCustomgmail" aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a gmail.
                                </div>
                                <div className="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustom03" className="form-label text-white">telefono</label>
                            <input type="number" className="form-control bg-transparent text-white  inputs" id="validationCustom03" required />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                            <div className="valid-feedback">
                                Looks good!
                                </div>
                        </div>   
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustom03" className="form-label text-white">Provincia</label>
                            <input type="text" className="form-control bg-transparent text-white  inputs" id="validationCustom03" required />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                            <div className="valid-feedback">
                                Looks good!
                                </div>
                        </div>
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustom04" className="form-label text-white ">Ciudad</label>
                            <select className="form-select bg-transparent text-white  inputs" id="validationCustom04" required>
                                <option className="text-dark">Genera Alvear</option>
                                <option className="text-dark">San Rafael</option>
                                <option className="text-dark">Malargue</option>
                                <option className="text-dark">Maipu</option>
                                <option className="text-dark">San Carlos</option>
                                <option className="text-dark">Las Heras</option>
                                <option className="text-dark">Godoy cruz</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className=" col-md-6  ">
                            <label htmlFor="validationCustom03" className="form-label text-white">Direccion</label>
                            <input type="text" className="form-control bg-transparent text-white  inputs" id="validationCustom03" required />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                            <div className="valid-feedback">
                                Looks good!
                                </div>
                        </div>
                        <div className=" col-md-6  mb-4">
                            <label htmlFor="validationCustom05" className="form-label text-white">Codigo postal</label>
                            <input type="text" className="form-control bg-transparent text-white  inputs" id="validationCustom05" required />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                            <div className="valid-feedback">
                                Looks good!
                                </div>
                        </div>
                        <div className="col-12 col-lg-4 container">
                            <div className="form-check ">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label text-white" htmlFor="invalidCheck">
                                    Acepta terminos y condiciones
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button
                                className="btn btn-light bg-transparent text-white rounded-0 mt-4"
                                type="submit"
                                
                                >
                                Ir a payment
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