import { PaymentContextProps } from '../../../model/PaymentContextModel';
import { createContext,useState,useContext, useEffect } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { SpinnerCircular } from 'spinners-react';

const PaymentData = createContext<PaymentContextProps | undefined>(undefined);
initMercadoPago('TEST-02bcb132-3f88-405d-a992-af590fa54955')

//ANDA EL CHECKOUT PERO FALTAN CORREGUIR ERRORES / 
//CREAR UN NUEVO COMPONENTE QUE AL APRETAR COMPRAR ME RENDERICE A PAGAR CON MERCADO PAGO

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

        console.log("Response",response)
        const data = await response.json();
        console.log("DATA ID",data.id)
        console.log("set prefecense",setPreferenceId(data.id))
        console.log("preferenceId",preferenceId)
        setPreferenceId(data.id)
        return data;
        } catch (error) {
        console.error(error);
        } 
    };

    //
    const handleId = () => {
        console.log()
        setPreferenceId(preferenceId);
    }//

    //
    useEffect(() => {
    
    }, [preferenceId])
    //  ?


////revisar
    const updatePrice = (event:any) => {
        const quantity = event.target.value;
        const amount = parseInt(orderData.price) * parseInt(quantity);
        setOrderData({ ...orderData, quantity, amount });
    }


    const renderSpinner = () => {
        if (isLoading) {
        return (
            <SpinnerCircular  enabled={false} />
        )
        }
    }
////

    const contextValue: PaymentContextProps = {
        handleClick,
        handleId,
        isReadyShow,
        isLoading,
        preferenceId,
        updatePrice,
        orderData,
        renderSpinner,
        setIsReadyShow,
        setPreferenceId,
        setIsLoading
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




