import { Outlet } from 'react-router-dom';
import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header/Header';

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
