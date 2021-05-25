import { Link } from 'react-router-dom'
import image from 'assets/images/main-hero.jpg';
import { useAuth } from 'contexts/AuthContext';
const Home = () => {
    const { user, logout } = useAuth();
    return (
        <section className="container mx-auto flex-grow flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="text-3xl sm:text-4xl mb-4 font-medium text-gray-900">
                    All your favorite<br className="hidden lg:inline-block" /> recipes in one place
                </h1>
                <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
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
            <div className="md:w-1/2 w-5/6">
                <img className="object-cover object-center" alt="hero" src={image} />
            </div>
        </section>
    )
}

export default Home;
