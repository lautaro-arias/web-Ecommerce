import FormData from './FormData';
import Payment from './Payment';
import { usePayment } from './handler/paymentHandler';

const MainPayment = () => {
  const { isReadyShow } = usePayment()

  window.scrollTo(0, 0);
  return (
    <div>
      {
        isReadyShow ? <FormData /> : <Payment />
      }
    </div>
  )
}
export default MainPayment;