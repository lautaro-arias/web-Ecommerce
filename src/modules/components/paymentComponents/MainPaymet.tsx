import FormData from './FormData'
import Payment from './Payment'
import {  usePayment } from './handler/paymentHandler'

const   MainPayment = () => {
  const { isReadyShow }= usePayment()
  return (
  
    <div>
                  
                  {
                    isReadyShow ? <FormData/> : <Payment/>
                  }   
                  
    </div>
  )
}

export default MainPayment