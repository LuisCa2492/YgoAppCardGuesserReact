import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/randomCard"
                    >
                        RandomCard
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/searchCoincidence"
                    >
                        SearchByName
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/GuessCard"
                    >
                        GuessCard
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {/* {user?.name} */}
                    </span>
                    <button 
                      className='nav-item nav-link btn'
                      
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
