import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import  LoginPage  from './Pages/LoginPage/LoginPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="" element={<LoginPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
