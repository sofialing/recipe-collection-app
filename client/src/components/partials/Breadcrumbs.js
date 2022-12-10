import { Link } from 'react-router-dom';

function Breadcrumbs({ title }) {
    return (
        <nav className="hidden bg-gray-100 lg:block">
            <div className="container mx-auto">
                <ol className="flex py-4 pl-4 text-xs font-medium uppercase tracking-widest">
                    <li className="pr-2">
                        <Link to="/recipes" className="text-gray-900 no-underline">
                            All recipes
                        </Link>
                    </li>
                    <li className="pr-2 text-gray-500"> / </li>
                    <li className="pr-2 text-gray-500">{title}</li>
                </ol>
            </div>
        </nav>
    );
}

export default Breadcrumbs;
