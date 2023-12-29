import { PaymentContextProps } from '../../../model/PaymentContextModel';
import { createContext,useState,useContext } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';

const PaymentData = createContext<PaymentContextProps | undefined>(undefined);
initMercadoPago('TEST-a90f16ef-c677-4a2b-a8b3-de9544cae21d');//TEST-75b16117-ea28-482e-9ade-d71742b68044 // TEST-a90f16ef-c677-4a2b-a8b3-de9544cae21d


export const PaymentProvider = ({ children }:any) => {
    const [preferenceId, setPreferenceId] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [orderData, setOrderData] = useState({ quantity: "1", price: "10", amount: 10, description: "Some book" });
    const [isReadyShow, setIsReadyShow] = useState(true);

    const handleClick = async () => {
        try {
        setIsReadyShow(false)
        setIsLoading(true);

        const response = await fetch("http://localhost:4000/create-order", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            
            body: JSON.stringify(orderData),
            
        });

        const { id } = await response.json();
        setPreferenceId(id);
        } catch (error) {
        console.error(error);
        } 
    };

    


////revisar
    const updatePrice = (event:any) => {
        const quantity = event.target.value;
        const amount = parseInt(orderData.price) * parseInt(quantity);
        setOrderData({ ...orderData, quantity, amount });
    }

 



    const contextValue: PaymentContextProps = {
        handleClick,
        isReadyShow,
        isLoading,
        preferenceId,
        updatePrice,
        orderData,
        setIsReadyShow,
        setPreferenceId,
        setIsLoading,
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




