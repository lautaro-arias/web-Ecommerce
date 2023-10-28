import { faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/navs.css';

const Navs = () => {
return (
    <>
    
        <nav className="navbar nav navbar-expand-lg p-0">
                <div className="container-fluid">
                <FontAwesomeIcon type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" 
                aria-controls="offcanvasScrolling" icon={faBars} /> 
                        <h1 className=" title navbar-brand text-center  fs-1"  >Nous</h1>
                            <form className="d-flex" role="search">
                            <FontAwesomeIcon  type="button" icon={faBagShopping} />
                            </form>
                    </div>
            </nav>
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex-="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                            <div className="offcanvas-body">
                            <p>Try scrolling the rest of the page to see this option in action.</p>
                        </div>
                </div>
</>

)
}

export default Navs