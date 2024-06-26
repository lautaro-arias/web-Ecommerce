import './styles/info.css';
import ArrayInfo from '../information/arrayInfo';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Info = () => {
      const { info } = ArrayInfo();

      return (
            <div className="container ">
                  <div className="row">
                        {info.map((i, index) => (
                              <div key={index} className="card  bg-transparent  positionCard text-dark   col-12 col-sm-6 col-md-4 col-lg-3 ">
                                    < LazyLoadImage src={i.img} className=" p-1 fondo-info card-img rounded-4" alt="..." />
                                    <div className="card-img-overlay fondo-body">
                                          <h5 className="card-title">{i.title}</h5>
                                          <p className="card-text">{i.descripcion}</p>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      )
}
export default Info;