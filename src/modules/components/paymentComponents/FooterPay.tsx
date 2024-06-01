import horizontal_logo from '../../assets/img/horizontal_logo.webp';
const FooterPay = () => {
  return (
    <footer className='footerpay '>
      <div className="footer_logo">
        <img
          id="horizontal_logo"
          alt="mercado logo"
          src={horizontal_logo}
        />
      </div>
      <div className="footer_text">
        <p>Developers Site:</p>
        <p>
          <a href="https://developers.mercadopago.com" >
            https://developers.mercadopago.com
          </a>
        </p>
      </div>
    </footer>
  );
};
export default FooterPay;