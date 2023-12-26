import FooterPay from './FooterPay'
import Navs from '../../nav/Navs'
import Checkout from './Checkout'
import Payment from './Payment'
import {  usePayment } from '../handlers/paymentHandler'

const   MainPayment = () => {
  const { isReadyShow }= usePayment()
  return (
  
    <div>
                  {
                    isReadyShow  ? <Checkout/> : <Payment/> 
                  }
        <FooterPay/>
    </div>
   
  )
}

export default MainPayment