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
import TextOnWhite from "./Components/Flexible/TextOnWhite/TextOnWhite";
import ContactFormImage from "./Components/Flexible/ContactFormImage/ContactFormImage";
import Router from "./Router";
import ContactFormColor from "./Components/Flexible/ContactFormColor/ContactFormColor";
import TextOnImage from "./Components/Flexible/TextOnImage/TextOnImage";

const App: React.FC = () => {
  return (
    <div>
      <Router />

      <Lists />

    </div>
  );
};

export default App;
