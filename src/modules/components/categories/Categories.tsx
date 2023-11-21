import './styles/categories.css'

const Categories= ({ handleFilter }:any) => {

  return (
    <div className="container mt-4"> 
        <div className="card border border-white">
              <div className="card-header bg-white border border-white">
              <form className="d-flex" role="search">
                <input className="form-control rounded-4 search" type="search" placeholder="Search" aria-label="Search"/>
              </form>
              </div>
              <div className="card-body">
                <h5 className="card-title">Que te gustaria ver hoy ?</h5> 
                  <ul className="  horizontal-list ">
                    <li className="btn btn-outline-dark  p-0 mb-2 mt-2 rounded-4 me-2 "
                    onClick={() => handleFilter('remera')}>Remera</li>
                    <li className="btn btn-outline-dark  p-0 mb-2 mt-2 rounded-4 me-2 "
                    onClick={() => handleFilter('buso')}>Buso</li>
                    <li className="btn btn-outline-dark  p-0 mb-2 mt-2 rounded-4 me-2 "
                    onClick={() => handleFilter('campera')}>Campera</li>
                    <li className="btn btn-outline-dark  p-0 mb-2 mt-2 rounded-4 me-2 "
                    onClick={() => handleFilter('pantalon')}>Pantalon</li>
                    <li className="btn btn-outline-dark  p-0 mb-2 mt-2 rounded-4 me-2 "
                    onClick={() => handleFilter('')}>Todo</li>
                  </ul>
              </div>
          </div>
    </div>
  )
}

export default Categories