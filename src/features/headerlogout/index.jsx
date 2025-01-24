import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice'; 
import { useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */
export function Headerlogout ({nameOfUser}){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
      // Action Redux pour réinitialiser l'état utilisateur
      dispatch(logout()); 
      // Rediriger vers la page d'accueil ou de connexion
      navigate('/');
    };
     return(
        <>
         <Link className="main-nav-item" to={`/user`}>
          <i className="fa fa-user-circle"></i>
          {nameOfUser}
         </Link>
         <button className="main-nav-item" onClick={handleLogout}  style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight:'bold' }}>
          <i className="fa fa-sign-out"></i>
          Sign Out
         </button>
     </>
     )
}