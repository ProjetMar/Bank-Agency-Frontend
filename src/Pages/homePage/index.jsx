import { Header } from "../../features/header";
import { FeatureItemHome } from "../../features/feature-itemHome";
import './style.css'
import { Footer } from "../../features/footer";
import { Headerlogin } from "../../features/headerlogin";

const features = [
    {
      iconSrc: '../../src/assets/img/icon-chat.png',
      iconAlt: 'Chat Icon',
      title: 'You are our #1 priority',
      description:
        'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      iconSrc: '../../src/assets/img/icon-money.png',
      iconAlt: 'Money Icon',
      title: 'More savings means higher rates',
      description:
        'The more you save with us, the higher your interest rate will be!',
    },
    {
      iconSrc: '../../src/assets/img/icon-security.png',
      iconAlt: 'Security Icon',
      title: 'Security you can trust',
      description:
        'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ];
  
 function Home(){
    return(
        <>
        <Header customContent={<Headerlogin/>}/>
        <main>
            <div className="hero">
                <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {features.map((feature, index) => (
                <FeatureItemHome
                key={index}
                iconSrc={feature.iconSrc}
                iconAlt={feature.iconAlt}
                title={feature.title}
                description={feature.description}
                />
                ))}
            </section>
        </main>
        <Footer/>
      </>
    )
}
export default Home