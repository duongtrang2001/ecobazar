import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';

import Home from '~/pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/shop', element: <Shop /> },
            { path: '/shop/:productId', element: <Product /> },
            { path: '/blogs', element: <Blogs /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            { path: '*', element: <Error /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
