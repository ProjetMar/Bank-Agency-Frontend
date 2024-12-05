import { Link } from "react-router-dom"
export function Headerlogin () {

    return(
        <Link className="main-nav-item" to={`/login`}>
        <i className="fa fa-user-circle"></i>
        Sign In
       </Link>   
    )
}