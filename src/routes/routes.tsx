import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import MenuPage from '../pages/MenuPage'
import NoMatchPage from '../pages/NoMatchPage';

function AppRoutes() {
    const navigationRoutes = [
        { path: 'chocolate-soul/', element: <MainPage /> },
        { path: 'chocolate-soul/menu', element: <MenuPage /> },
        { path: 'chocolate-soul/*', element: <NoMatchPage /> },

    ]
    return (
        <Routes>
            {navigationRoutes.map((route) => (<Route key={route.path} path={route.path} element={route.element} />))}
        </Routes>
    );
}
export default AppRoutes;