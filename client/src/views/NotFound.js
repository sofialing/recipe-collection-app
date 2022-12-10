import image from 'assets/images/main-hero.jpg';

function NotFound() {
    return (
        <section className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
            <img
                className="mb-10 w-5/6 object-cover object-center md:w-3/6 lg:w-2/6"
                alt="hero"
                src={image}
            />
            <div className="mb-16 flex w-full flex-col items-center text-center md:w-2/3">
                <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
                    Oh no! Page not found.
                </h1>
                <p className="mb-8 leading-relaxed">
                    Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo
                    live-edge tumeric scenester copper mug flexitarian. Prism vice offal
                    plaid everyday carry. Gluten-free chia VHS squid listicle artisan.
                </p>
            </div>
        </section>
    );
}

export default NotFound;
