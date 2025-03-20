import { Outlet } from 'react-router-dom';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';

function RootLayout() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default RootLayout;
