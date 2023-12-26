import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../modules/components/Main';
import MainPayment from '../modules/components/shopping-cart/paymentComponents/MainPaymet';
import { PaymentProvider } from '../modules/components/shopping-cart/handlers/paymentHandler';
import { CartProvider } from '../modules/components/shopping-cart/handlers/cartHandler';

const Urls = () => {
return (
    <Router>
        <PaymentProvider>
            <CartProvider>
                <Routes>
                    <Route path="/"  element={<Main/>} />
                </Routes>
                <Routes>
                    <Route path="/Payment"  element={<MainPayment/>} />
                </Routes>
            </CartProvider>
    </PaymentProvider>
</Router>
)
}

export default Urls