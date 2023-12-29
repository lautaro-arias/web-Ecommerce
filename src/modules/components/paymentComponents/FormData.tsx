import React, { useRef } from 'react'
import { usePayment } from './handler/paymentHandler'
import './styles/paymentComponets.css'

//REVISAR RESPONSIVIDAD //

const FormData = () => {
    const { handleClick } = usePayment()

 /*
  // Referencias para los campos de formulario
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const gmailRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLSelectElement>(null);
  const directionRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);
  const termsCheckRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de los campos
    const fields = [
      firstNameRef,
      lastNameRef,
      gmailRef,
      numberRef,
      cityRef,
      stateRef,
      directionRef,
      zipRef,
      termsCheckRef,
    ];

    let isValid = true;

    fields.forEach((field) => {
      if (field && field.current && !field.current.checkValidity()) {
        isValid = false;
        field.current.classList.add('is-invalid');
      }
    });

    if (isValid) {
      // Si todos los campos son válidos, continuar con la lógica de envío
      handleClick();
    }
  };onSubmit={handleSubmit} */
  const forms = document.querySelectorAll<HTMLFormElement>('.needs-validation');
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });


  return (
    <>
<div className="fondo-login ">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 ">
        <div className="form-login p-4 border border-white rounded-0  ">
            <form className="p-2" >
                <div className="row ">
                    <div className=" col-md-6 mt-0 ">
                        <label htmlFor="validationCustom01" className="form-label text-white  ">First name</label>
                        <input type="text" className="form-control bg-transparent text-white  inputs" id="validationCustom01" value="" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className=" col-md-6  ">
                        <label htmlFor="validationCustom02" className="form-label text-white">Last name</label>
                        <input type="text" className="form-control bg-transparent text-white  inputs" id="validationCustom02" value="" required />
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
                        </div>
                    </div>
                    <div className=" col-md-6  ">
                        <label htmlFor="validationCustom03" className="form-label text-white">Number</label>
                        <input type="text" className="form-control bg-transparent text-white  inputs" id="validationCustom03" required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>   
                    <div className=" col-md-6  ">
                        <label htmlFor="validationCustom03" className="form-label text-white">City</label>
                        <input type="text" className="form-control bg-transparent text-white  inputs" id="validationCustom03" required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className=" col-md-6  ">
                        <label htmlFor="validationCustom04" className="form-label text-white ">State</label>
                        <select className="form-select bg-transparent text-white  inputs" id="validationCustom04" required>
                            <option className='bg-none' >...</option>
                            <option >alvear</option>
                            <option>Sanra</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div className=" col-md-6  ">
                        <label htmlFor="validationCustom03" className="form-label text-white">direction</label>
                        <input type="text" className="form-control bg-transparent text-white  inputs" id="validationCustom03" required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className=" col-md-6  mb-4">
                        <label htmlFor="validationCustom05" className="form-label text-white">Zip</label>
                        <input type="text" className="form-control bg-transparent text-white  inputs" id="validationCustom05" required />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label text-white" htmlFor="invalidCheck">
                                Agree to terms and conditions
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
                            onClick={handleClick}
                            id="checkout-btn"
                        >
                            Ir a payment
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</>
)
}

export default FormData