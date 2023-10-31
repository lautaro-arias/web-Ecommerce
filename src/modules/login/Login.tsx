import { Link } from 'react-router-dom'
import './styles/login.css'

const Login = () => {
  return (
    <div className="fondo-login">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          <div className=" form-login p-4 border border-white rounded-0">
              <form className="p-4  d-grid gap-2">
                  <div className="col mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label text-start text-white">Email</label>
                    <input type="email" className="form-control bg-transparent text-white pt-0 inputs" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="col mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                    <input type="password" className="form-control bg-transparent text-white pt-0 inputs" id="exampleInputPassword1"/>
                  </div>
                  <Link type="submit" className=" btn btn-light  bg-transparent text-white  rounded-0 mt-4 " to="/">Ingresar</Link>
              </form>
            </div>
        </div>
    </div> 
  )
}

export default Login