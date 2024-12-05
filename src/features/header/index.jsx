import { Link } from 'react-router-dom'
import './style.css'
/* eslint-disable react/prop-types */
export function Header ( {customContent} ){
    return(
    <nav className="main-nav">
      <Link className="main-nav-logo" to={`/`}>
        <img
          className="main-nav-logo-image"
          src="../../src/assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
         { customContent }
      </div>
    </nav>)
}