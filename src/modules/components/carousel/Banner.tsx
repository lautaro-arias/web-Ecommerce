import { LazyLoadImage } from 'react-lazy-load-image-component';
import carousel1 from '../../assets/carousel/c1.jpeg';
import carousel2 from '../../assets/carousel/c2.jpeg';
import carousel3 from '../../assets/carousel/c3.jpeg';
import './styles/banner.css';

const banner = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade h-50" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <LazyLoadImage src={carousel1} className="d-block w-100 img-carrousel" alt="indumentaria masculina" />
        </div>
        <div className="carousel-item">
          <LazyLoadImage src={carousel2} className="d-block w-100 img-carrousel" alt="indumentaria masculina" />
        </div>
        <div className="carousel-item">
          <LazyLoadImage src={carousel3} className="d-block w-100 img-carrousel" alt="indumentaria masculina" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
export default banner;