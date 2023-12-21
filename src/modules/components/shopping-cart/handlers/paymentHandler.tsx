import { FetchPaymentData } from "../../../../services/payment.service";
import { PaymentContextProps } from '../../../model/PaymentContextModel';
import  React,{ createContext,useState,useContext, useEffect } from 'react';
import { Wallet, initMercadoPago } from '@mercadopago/sdk-react';
import { SpinnerCircular } from 'spinners-react';

const PaymentData = createContext<PaymentContextProps | undefined>(undefined);
initMercadoPago('TEST-4268166246905557-121907-d80f0d8df86261eeb064acc9165d864e-338813628')

//ANDA EL CHECKOUT PERO FALTAN CORREGUIR ERRORES / 
//CREAR UN NUEVO COMPONENTE QUE AL APRETAR COMPRAR ME RENDERICE A PAGAR CON MERCADO PAGO

export const PaymentProvider = ({ children }:any) => {
   // const { fetchPaymentData } = useFetchPaymentData();
    const [preferenceId, setPreferenceId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [orderData, setOrderData] = useState({ quantity: "1", price: "10", amount: 10, description: "Some book" });
    const [isReady, setIsReady] = useState(false);
    const [isVisible, setIsVisible] = React.useState(true);



    const handleClick = async () => {
        try {
        setIsLoading(true);

        const response = await fetch("http://localhost:4000/create-order/", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        });

        const preference = await response.json();
        setPreferenceId(preference.id);
        } catch (error) {
        console.error(error);
        } finally {
        setIsLoading(false);
        }
    };

    const handleOnReady = () => {
        setIsReady(true);
    }

    useEffect(() => {
        if (preferenceId) setIsVisible(false);
    }, [preferenceId])
    

    const paymentClass = `payment-form dark ${isReady ? '' : 'payment-form--hidden'}`;
    const shoppingCartClass = `shopping-cart dark ${isVisible ? '' : 'shopping-cart--hidden'}`;


    const updatePrice = (event:any) => {
        const quantity = event.target.value;
        const amount = parseInt(orderData.price) * parseInt(quantity);
        setOrderData({ ...orderData, quantity, amount });
    }

    const renderCheckoutButton = (preferenceId:any) => {
        if (!preferenceId) return null;

        return (
        <Wallet 
            initialization={{ preferenceId: preferenceId }}
            onReady={handleOnReady} />
        )
    }

    const renderSpinner = () => {
        if (isLoading) {
         return (
             <SpinnerCircular  enabled={false} />
         )
        }
     }

    const contextValue: PaymentContextProps = {
        handleClick,
        renderCheckoutButton,
        handleOnReady,
        isReady,
        isLoading,
        isVisible,
        preferenceId,
        paymentClass,
        shoppingCartClass,
        updatePrice,
        orderData,
        renderSpinner,
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




