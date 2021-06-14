import { Link } from 'react-router-dom'
import image from 'assets/images/main-hero.jpg';
import { useAuth } from 'contexts/AuthContext';
const Home = () => {
    const { user, logout } = useAuth();
    return (
        <section className="container mx-auto flex-grow flex flex-col-reverse lg:flex-row items-center px-5 py-16 md:py-24">
            <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col lg:items-start lg:text-left items-center text-center">
                <span className="text-xs text-green-500 tracking-widest font-medium mb-1 uppercase">Recipebox</span>
                <h1 className="text-3xl sm:text-4xl mb-4 font-medium text-gray-900">
                    Store your all favorite<br className="hidden lg:inline-block" /> recipes in one place
                </h1>
                <p className="mb-8 leading-relaxed">Add all your go-to recipes to Recipebox and create your own personal recipe book! Access them across multiple devices at any time, no matter where you are — from the kitchen to the living room to the grocery store and beyond.</p>
                {user ? (
                    <div className="flex justify-center">
                        <Link to="add-recipe" className="btn inline-flex">Add recipe</Link>
                        <button className="btn btn-outline ml-4 inline-flex" onClick={() => logout()}>Log out</button>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <Link to="create-account" className="btn inline-flex">Create account</Link>
                        <Link to="login" className="btn btn-outline ml-4 inline-flex ">Log in</Link>
                    </div>
                )}

            </div>
            <figure className="mb-12 lg:mb-0 lg:w-1/2">
                <img className="w-full object-cover" alt="Vegan meal" width="640" height="427" src={image} />
            </figure>
        </section>
    )
}

export default Home;
