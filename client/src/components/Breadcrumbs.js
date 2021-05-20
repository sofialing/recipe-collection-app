import { Link } from 'react-router-dom';

const Breadcrumbs = ({ title }) => {
    return (
        <nav className="bg-gray-100">
            <div className="container mx-auto">
                <ol className="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey text-xs tracking-widest uppercase">
                    <li className="font-medium pr-2">
                        <Link to='/recipes' className="no-underline">All recipes</Link>
                    </li>
                    <li className="pr-2 text-gray-500"> / </li>
                    <li className="pr-2 text-gray-500 ">
                        {title}
                    </li>
                </ol>
            </div>
        </nav>
    )
}

export default Breadcrumbs
