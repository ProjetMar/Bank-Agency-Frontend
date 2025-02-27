import { Account } from "../../features/account";
import { Footer } from "../../features/footer";
import { Header } from "../../features/header"
import { Headerlogout } from "../../features/headerlogout"
import "./style.css"
import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '../../features/profileSlice'; // Import du thunk pour récupérer les données du profil
import { updateProfile  } from "../../features/updateProfile";
// import { updateProfile } from "../../features/updateProfile";
const Accounts = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description:'Available Balance',
    },
    {
        title: 'Argent Bank Savings (x6712)',
        amount: '$10,928.42',
        description:'Available Balance',
    },
    {
        title: 'Argent Bank Credit Card (x8349)',
        amount: '$184.30',
        description:'Current Balance',
    },
]; 

function User(){
  const dispatch = useDispatch();

  // Récupérer les données depuis le store
  const firstname = useSelector((state) => state.profile.firstname);
  const lastname = useSelector((state) => state.profile.lastname);
  const [Firstname, setFirstname] = useState(firstname);
  const [Lastname, setLastname] = useState(lastname);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => setIsEditing(true);
  const handleCancelClick = () => setIsEditing(false);

   // Charger les données du profil au montage du composant
   useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  const handleUpdate = async (e) => {
    // document.getElementById("edit-button").classList.add('display-off')
    e.preventDefault();
    console.log(Firstname);
    console.log(Lastname)
    // Déclenche la requête de connexion
    dispatch(updateProfile({ firstName: Firstname, lastName: Lastname })).then((result) => {
        if (result.type === 'user/updateProfile/fulfilled') {
          // Si la connexion est réussie, redirige l'utilisateur vers la page de profil
          console.log('le profile a bien ete changer') // Redirection vers la page profile
          dispatch(userProfile())
        }
      }); // Dispatch vers Redux
      setIsEditing(false);
  };
  // changer la valeur par defaut de l'input qui est null initialement par les valeur de firstname et lastname 
  useEffect(() => {
    if (firstname && lastname) {
      setFirstname(firstname);
      setLastname(lastname);
    }
  }, [firstname, lastname]);

    return(
        <>
            <Header customContent={<Headerlogout nameOfUser={firstname} />} />
           <main className="main bg-dark">
               <div className="header">
                 <h1>Welcome back<br />{!isEditing && <span>{firstname} {lastname}!</span>}</h1>
                 {!isEditing ? (
                  <button className="edit-button" onClick={handleEditClick}>
                           Edit Name
                  </button>
                 ) : (
                  <div className="form-block">
                    <form onSubmit={handleUpdate}>
                        <div className="input-block">
                          <div className="input-wrapper margin-right border-style">
                              <input type="string" 
                                 value={Firstname} 
                                 onChange={(e) => setFirstname(e.target.value)} 
                                 placeholder="Firstname" 
                                 className={Firstname === firstname ? 'defaut' : 'rempli'} id="firstname" />
                          </div>
                          <div className="input-wrapper border-style">
                              <input type="string" 
                                 value={Lastname} 
                                 onChange={(e) => setLastname(e.target.value)} 
                                 placeholder="Lastname" 
                                 className={Lastname === lastname ? 'defaut' : 'rempli'} id="lastname" />
                          </div>
                        </div>
                        <div className="buttons-block">
                          <button type="submit" className="margin-right button-style border-style">Save</button>
                          <button className="button-style border-style" type="button" onClick={handleCancelClick}>Cancel</button>
                        </div>
                    </form>
                  </div>
                 )}
                 
               </div>
               <h2 className="sr-only">Accounts</h2>
               {Accounts.map((account, index) => (
                <Account
                key={index}
                title={account.title}
                amount={account.amount}
                description={account.description}
                />))
               }
            </main>
            <Footer/>
        </>
       
    )

}
export default User