import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../modules/components/Main';

const Urls = () => {
return (
    <Router>
        <Routes>
            <Route path="/"  element={<Main/>} />
        </Routes>
</Router>
)
}

export default Urls