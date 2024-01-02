import { PaymentContextProps } from '../../../model/PaymentContextModel';
import { createContext,useState,useContext } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';

//Revisar archivo ENV
const PaymentData = createContext<PaymentContextProps | undefined>(undefined);
const apiKey = process.env.API_KEY;

// Comprobación de nulabilidad antes de asignar a apiKey
if (apiKey !== undefined) {
  // Inicializa MercadoPago con la API key obtenida de la variable de entorno
  initMercadoPago(apiKey);
} else {
  // Manejar el caso en el que la variable de entorno no esté definida
  console.error('API_KEY no está definida en las variables de entorno.');
}

export const PaymentProvider = ({ children }:any) => {
    const [preferenceId, setPreferenceId] = useState();
    const [isReadyShow, setIsReadyShow] = useState(true);
    const [validated, setValidated] = useState(false);

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
            // REVISAR tiene que enviar los datos de los productos a comprar
   /* const handleClick = async () => {
        try {
            const productsData = selectedProductsArray.map((product, index) => {
                return {
                    id: product.id,
                    description: product.nombre,
                    price: product.precio,
                    quantity: Number(productQuantities[index]), // Asegúrate de convertirlo a número
                    // Otras propiedades del producto que sean relevantes para el pago
                };
            });
    
            const response = await fetch("http://localhost:4000/create-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    products: productsData,
                }),
            });
    
            const { id } = await response.json();
            setPreferenceId(id);
        } catch (error) {
            console.error(error);
        }
    };*/
    

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
}




