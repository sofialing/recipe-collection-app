import { Link } from 'react-router-dom';

const Breadcrumbs = ({ title }) => {
    return (
        <nav className="hidden lg:block bg-gray-100">
            <div className="container mx-auto">
                <ol className="list-reset py-4 pl-4 flex text-xs font-medium tracking-widest uppercase">
                    <li className="pr-2">
                        <Link to='/recipes' className="no-underline text-gray-900">All recipes</Link>
                    </li>
                    <li className="pr-2 text-gray-500"> / </li>
                    <li className="pr-2 text-gray-500">
                        {title}
                    </li>
                </ol>
            </div>
        </nav>
    )
}

export default Breadcrumbs;
