import FooterPay from './FooterPay'
//import Checkout from './Checkout'
import Payment from './Payment'
import {  usePayment } from './handler/paymentHandler'

const   MainPayment = () => {
  const { isReadyShow }= usePayment()
  return (
  
    <div>
                  
                    <Payment/> 
                  
        <FooterPay/>
    </div>
   
  )
}

export default MainPayment