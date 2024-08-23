import { Link, NavLink } from "react-router-dom"
import AuthService from "../../../custome/AuthService"
import { userContext } from "../../../custome/mineralWaterContext/UserContext";
import { useContext } from "react";

export const Navbar = () => {
  const {model,setModel} = useContext(userContext);
  return (<>
    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'>Mineral Water</span>
        <button className='navbar-toggler' type='button'
          data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown' aria-expanded='false'
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/home'>Home</NavLink>
            </li>

            <li className='nav-item'>
              <NavLink className='nav-link' to='/personnel'>Personnel</NavLink>
            </li>

          </ul>

          <ul className='navbar-nav ms-auto'>
          {AuthService.getUsername()}
          
            { model===undefined ?
              <li>
                <button className="btn btn-outline-light" onClick={() => AuthService.doLogin()}>Login</button>
              </li>
               : 
              <li>
                {/* <Link className="nav-link"  to='/logout'>Logout</Link> */}
                <button className='btn btn-outline-light' onClick={() => AuthService.doLogout()}>Logout</button>
              </li>
             } 
          </ul>
        </div>
      </div>
    </nav>
  </>)
} 