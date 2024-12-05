import { Account } from "../../features/account";
import { Footer } from "../../features/footer";
import { Header } from "../../features/header"
import { Headerlogout } from "../../features/headerlogout"
import "./style.css"
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
    return(
        <>
           <Header customContent={<Headerlogout/>}/>
           <main className="main bg-dark">
               <div className="header">
                 <h1>Welcome back<br />Tony Jarvis!</h1>
                 <button className="edit-button">Edit Name</button>
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