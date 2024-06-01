import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from '../menu-offcanvas/Menu';
import IconCart from '../shopping-cart/IconCart';
import './styles/navs.css';

const Navs = () => {

    return (
        <>
            <nav className=" navbar nav-nav navbar-expand-lg p-0">
                <div className="container-fluid">
                    <FontAwesomeIcon type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                        aria-controls="offcanvasScrolling" icon={faBars} title="Menu" />
                    <a className=" title navbar-brand text-center fs-1" href="/">Nous</a>
                    <form className="d-flex">
                        <IconCart />
                    </form>
                </div>
            </nav>
            <Menu />
        </>
    )
}
export default Navs;