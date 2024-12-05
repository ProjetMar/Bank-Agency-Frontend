import { Footer } from "../../features/footer"
import { Header } from "../../features/header"
import { useDispatch } from 'react-redux';
import { loginAsync } from '../../features/userSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'
import { Headerlogin } from "../../features/headerlogin";


function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const error = useSelector((state) => state.user.error);

    const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password)
    // Déclenche la requête de connexion
    dispatch(loginAsync({ email, password })).then((result) => {
        if (result.type === 'user/login/fulfilled') {
          // Si la connexion est réussie, redirige l'utilisateur vers la page de profil
          navigate('/user'); // Redirection vers la page profile
        }
      }); // Dispatch vers Redux
    };
    return (
        <>
            <Header customContent={<Headerlogin/>}/>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Useremail</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
                    {/* <!-- SHOULD BE THE BUTTON BELOW -->*/}
                     <button className="sign-in-button" type="submit">Sign In</button>
        
                    </form>
                </section>
            </main>
            <Footer/>
        </>
    )
}
export default SignIn