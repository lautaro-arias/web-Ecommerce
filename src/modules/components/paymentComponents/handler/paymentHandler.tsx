import { PaymentContextProps } from '../../../model/PaymentContextModel';
import { createContext,useState,useContext } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';


const PaymentData = createContext<PaymentContextProps | undefined>(undefined);
initMercadoPago('TEST-a90f16ef-c677-4a2b-a8b3-de9544cae21d')


export const PaymentProvider = ({ children }:any) => {
    const [preferenceId, setPreferenceId] = useState();
    const [isReadyShow, setIsReadyShow] = useState(true);
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        gmail: '',
        telefono: '',
        provincia: '',
        ciudad: '',
        direccion: '',
        codigoPostal: '',
        aceptaTerminos: false,
    });

    const handleClick = async () => {
        try {
        

        const response = await fetch("http://localhost:4000/create-order", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({  quantity: "1", price: "10", amount: 10, description: "Some book" }),
            
        }); 

        const { id } = await response.json();
        setPreferenceId(id);
        } catch (error) {
        console.error(error);
        } 
    };

    
    
    const handleChange = (e:any) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [id]: type === 'checkbox' ? checked : value,
        }));
    };
    
    const handleSubmit = (event:any) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (form.checkValidity()) {
            setIsReadyShow(false)
        }
    };


    const contextValue: PaymentContextProps = {
        formData,
        handleChange,
        handleClick,
        isReadyShow,
        preferenceId,
        setIsReadyShow,
        setPreferenceId,
        handleSubmit,
        validated, 
        setValidated
    };

    return (
        <PaymentData.Provider value={contextValue}>
            {children}
        </PaymentData.Provider>
    )
};

export const usePayment = () => {
    const context = useContext(PaymentData);
    if (!context) {
    throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};




