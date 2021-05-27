import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="text-gray-600 bg-gray-100 dark:text-white dark:bg-gray-900">
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-white">
                    <svg className="w-12 h-12 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="m19.53 59.425a1.974 1.974 0 0 1 -2.712-.495 1.921 1.921 0 0 1 .561-2.7l10.049-6.444 2.839 2.014zm27.94-1.963a1.93 1.93 0 0 1 -3.006 1.965l-28.039-19.9a1 1 0 0 0 -1.168.008 6.93 6.93 0 0 1 -7.91-.233 7.562 7.562 0 0 1 -3.136-4.29 5.4 5.4 0 0 1 4.7-6.959 7.563 7.563 0 0 1 5.152 1.3 6.93 6.93 0 0 1 3.174 7.247 1 1 0 0 0 .43 1.087l28.954 18.542a1.912 1.912 0 0 1 .849 1.233zm9.18-18.162a6.931 6.931 0 0 1 -7.911.231 1 1 0 0 0 -1.168-.008l-11.063 7.854-2.652-1.7 12.474-8a1 1 0 0 0 .43-1.085 6.965 6.965 0 0 1 3.178-7.247c3.2-2.157 7.314-1.681 9.163 1.058s.748 6.74-2.451 8.897z" />
                        <path fill="white" d="m22.82 35-.4-2h19.16l-.4 2zm-3.82-29a6.931 6.931 0 0 1 5.083 2.2 1 1 0 0 0 1.626-.25 6.986 6.986 0 0 1 12.582 0 1 1 0 0 0 1.626.25 6.931 6.931 0 0 1 5.083-2.2 7 7 0 0 1 0 14 1 1 0 0 0 -.98.8l-2.04 10.2h-3.827l.837-5.858-1.98-.284-.877 6.142h-3.133v-11h-2v11h-3.133l-.877-6.142-1.98.284.837 5.858h-3.827l-2.04-10.2a1 1 0 0 0 -.98-.8 7 7 0 0 1 0-14z" />
                    </svg>
                    <span className="ml-4 text-xl tracking-wider">RecipeHacker</span>
                </Link>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="https://github.com/sofialing" className="text-gray-500 dark:text-white">
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
