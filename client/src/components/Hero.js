import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/images/main-hero.jpg';

const Hero = () => {
    return (
        <section className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="text-3xl sm:text-4xl mb-4 font-medium text-gray-900">
                    Before they sold out <br className="hidden lg:inline-block" />readymade gluten
                </h1>
                <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                <div className="flex justify-center">
                    <Link to="create-account" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-lg text-lg">Create account</Link>
                    <Link to="login" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg">Log in</Link>
                </div>
            </div>
            <div className="md:w-1/2 w-5/6">
                <img className="object-cover object-center" alt="hero" src={image} />
            </div>
        </section>
    )
}

export default Hero
