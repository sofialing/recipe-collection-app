import Footer from 'components/layout/Footer';
import Navbar from 'components/layout/Navbar';
import AuthContextProvider from 'contexts/AuthContext';
import AppRoutes from 'routes';

function App() {
    return (
        <AuthContextProvider>
            <Navbar />
            <main className="flex grow flex-col text-gray-600">
                <AppRoutes />
            </main>
            <Footer />
        </AuthContextProvider>
    );
}

export default App;
