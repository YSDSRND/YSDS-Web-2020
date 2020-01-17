import React from "react";
import "./assets/scss/main.scss";
import Hero from "./Components/Flexible/Hero/Hero";
import Article from "./Components/Flexible/Article/Article";
import Cards from "./Components/Flexible/Cards/Cards";
import Numbers from "./Components/Flexible/Numbers/Numbers";
import Cases from "./Components/Flexible/Cases/Cases";
import BlackDiagonal from "./Components/Flexible/BlackDiagonal/BlackDiagonal";
import Offices from "./Components/Flexible/Offices/Offices";
import Agents from "./Components/Flexible/Agents/Agents";
import Footer from "./Components/Global/Footer/Footer";
import Header from "./Components/Global/Header/Header";
import Lists from "./Components/Flexible/Lists/Lists";
import CardsAlternate from "./Components/Flexible/CardsAlternate/CardsAlternate";
import TextAndImage from "./Components/Flexible/TextAndImage/TextAndImage";
import Editor from "./Components/Flexible/Editor/Editor";
import ContactFormImage from "./Components/Flexible/ContactFormImage/ContactFormImage";
import ContactFormBlue from "./Components/Flexible/ContactFormBlue/ContactFormBlue";
import ContactFormWhite from "./Components/Flexible/ContactFormWhite/ContactFormWhite";

const App: React.FC = () => {
  return (
    <div>
      <Header />

      <Hero
        header="Titel"
        subheader="SHORT TEXT TO DESCRIPTE THE SERVICES OFFERED. SHORT TEXT TO DESCRIPTE THE SERVICES OFFERED. SHORT TEXT TO DESCRIPTE THE SERVICES OFFERED."
        centered
      />
      <Article
        header="Qualified packaging and Monitoring Solutions"
        subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum
        sed do eiusmod tempor incididunt ut labore."
      />
      <Cards cards={[{}]} />

      <Numbers
        header="DELIVERY SERVICE THE YSDS WAY"
        numbers={[
          {
            number: "24/7",
            explanation: "Tracking and service WHENEVER YOU NEED IT"
          }
        ]}
      />
      <Lists />

      <Editor />

      <TextAndImage />

      <Cases cases={[]} />
      <BlackDiagonal />

      <ContactFormWhite />

      <ContactFormBlue />

      <TextAndImage />
      <TextAndImage mirrored />

      <CardsAlternate header="SOme header" cards={[{}]} />

      <ContactFormImage />
      <Offices
        header="Pay us a visit"
        body="If you are close to our offices, you are more than welcome to drop by. If you happen to be further away, don't worry, our global network of agents and partners will make sure your needs are also met."
        offices={[
          {
            email: "",
            phoneNumber: ""
          }
        ]}
      />

      <Agents
        header="Our agents"
        body="If you are close to our offices, you are more than welcome to drop by. If you happen to be further away, don't worry, our global network of agents and partners will make sure your needs are also met."
        agents={[
          {
            country: "Australia",
            city: "Brisbane"
          }
        ]}
      />

      <Footer />
    </div>
  );
};

export default App;
