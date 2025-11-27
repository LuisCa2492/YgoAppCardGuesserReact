import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { startLogOut } from "../store/auth";

export const NavBar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { status, displayName } = useSelector(state => state.auth);




    const startLogin = (event) => {
        navigate('/auth/login', {
            replace: true
        });
    }

    const closeSession = () => {
        dispatch(startLogOut());
        navigate('/auth/login', {
            replace: true
        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                YGO Card Guesser
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/randomCard"
                    >
                        RandomCard
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/searchCoincidence"
                    >
                        SearchByName
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/GuessCard"
                    >
                        GuessCard
                    </NavLink>
                    {/* <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/LeaderBoard"
                    >
                        LeaderBoard
                    </NavLink> */}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    {
                        (status === 'authenticated')
                            ? <>
                                <span className='nav-item nav-link text-primary'>
                                    {displayName}
                                </span>
                                <IconButton
                                    size="large"
                                    onClick={closeSession}
                                >
                                    <LogoutOutlined sx={{ color: 'red' }} />
                                </IconButton>

                            </>
                            :
                            <button
                                className='nav-item nav-link btn'
                                onClick={startLogin}
                            >
                                Login
                            </button>
                    }
                </ul>
            </div>
        </nav>
    )
}
