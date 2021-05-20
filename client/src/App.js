import AuthContextProvider from './contexts/AuthContext'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

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