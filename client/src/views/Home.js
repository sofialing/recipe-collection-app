import image from 'assets/images/main-hero.jpg';
import { useAuth } from 'contexts/AuthContext';
import { Link } from 'react-router-dom';

function Home() {
    const { user, logout } = useAuth();
    return (
        <section className="container mx-auto flex grow flex-col-reverse items-center px-5 py-16 md:py-24 lg:flex-row">
            <div className="flex flex-col items-center text-center lg:w-1/2 lg:grow lg:items-start lg:pr-24 lg:text-left">
                <span className="mb-1 text-xs font-medium uppercase tracking-widest text-emerald-500">
                    Recipebox
                </span>
                <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
                    Store your all favorite
                    <br className="hidden lg:inline-block" /> recipes in one place
                </h1>
                <p className="mb-8 leading-relaxed">
                    Add all your go-to recipes to Recipebox and create your own personal
                    recipe book! Access them across multiple devices at any time, no
                    matter where you are — from the kitchen to the living room to the
                    grocery store and beyond.
                </p>
                {user ? (
                    <div className="flex justify-center">
                        <Link to="add-recipe" className="btn inline-flex">
                            Add recipe
                        </Link>
                        <button
                            className="btn btn-outline ml-4 inline-flex"
                            onClick={() => logout()}
                        >
                            Log out
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <Link to="create-account" className="btn inline-flex">
                            Create account
                        </Link>
                        <Link to="login" className="btn btn-outline ml-4 inline-flex ">
                            Log in
                        </Link>
                    </div>
                )}
            </div>
            <figure className="mb-12 lg:mb-0 lg:w-1/2">
                <img
                    className="w-full object-cover"
                    alt="Vegan meal"
                    width="640"
                    height="427"
                    src={image}
                />
            </figure>
        </section>
    );
}

export default Home;
