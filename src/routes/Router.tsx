import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../modules/components/Main';
import Render from '../modules/components/paymentComponents/Render';
import { PaymentProvider } from '../modules/components/paymentComponents/handler/paymentHandler';
import { CartProvider } from '../modules/components/shopping-cart/handlers/shoppingHandler';

const Urls = () => {
return (
    <Router>
            <PaymentProvider>
                    <CartProvider>

                            <Routes>
                                <Route path="/"  element={<Main/>} />
                            </Routes>

                            <Routes>
                                <Route path="/Payment"  element={<Render/>} />
                            </Routes>

                    </CartProvider>
        </PaymentProvider>
</Router>
)
}

export default Urls;