import Curso from './pages/Curso';
import Inicio from './pages/Inicio';
import Premium from './pages/Premium';
import Progress from './pages/Progress';
import Login from './pages/Login';
import __Layout from './Layout.jsx';

export const PAGES = {
    "Login": Login,
    "Inicio": Inicio,
    "Premium": Premium,
    "Progress": Progress,
    "Curso": Curso,
}

export const pagesConfig = {
    mainPage: "Login",
    Pages: PAGES,
    Layout: __Layout,
};
