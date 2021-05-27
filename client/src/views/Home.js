import { Link } from 'react-router-dom'
import image from 'assets/images/main-hero.jpg';
import { useAuth } from 'contexts/AuthContext';
const Home = () => {
    const { user, logout } = useAuth();
    return (
        <section className="container mx-auto flex-grow flex flex-col-reverse lg:flex-row items-center px-5 py-16 md:py-24">
            <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col lg:items-start lg:text-left items-center text-center">
                <h1 className="text-3xl sm:text-4xl mb-4 font-medium text-gray-900 dark:text-white">
                    All your favorite<br className="hidden lg:inline-block" /> recipes in one place
                </h1>
                <p className="mb-8 leading-relaxed">CookBook is your very own personal recipe organiser. Save your favourite recipes from websites, magazines, recipe books or simply those from your head, all in one place, accessible on all of your devices, anytime.</p>
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
                <img className="object-cover object-center" alt="hero" src={image} />
            </figure>
        </section>
    )
}

export default Home;
