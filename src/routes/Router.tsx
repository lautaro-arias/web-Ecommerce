import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../modules/login/Login'
import Main from '../modules/home/Main';

const Urls = () => {
return (
    <Router>
        <Routes>
            <Route path="/"  element={<Main/>} />
            <Route path="/login"  element={<Login/>}/>
        </Routes>
</Router>
)
}

export default Urls