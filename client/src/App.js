import AuthContextProvider from 'contexts/AuthContext'
import Footer from 'components/layout/Footer';
import Navbar from 'components/layout/Navbar';
import AppRoutes from 'routes';

const App = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <main className="flex-grow flex flex-col text-gray-600">
        <AppRoutes />
      </main>
      <Footer />
    </AuthContextProvider>
  )
}

export default App;