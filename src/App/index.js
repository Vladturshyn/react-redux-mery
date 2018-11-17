import React, { Component } from "react";

import Header from '../components/Header';
import Services from '../components/Services';
import SmallMenu from '../components/SmallMenu';
import HowItWorks from '../components/HowItWorks';
import OurTeam from '../components/OurTeam';
import Tools from '../components/Tools';
import Deals from '../components/Deals';
import ContainerForm from '../containers/ContainerForm';
import Footer from '../components/Footer';


class App extends Component {
  render() {
    return (
      <div>    
        <Header />
        <Services />
        <SmallMenu />
        <HowItWorks />
        <OurTeam />
        <Tools />
        <Deals />
        <ContainerForm />
        <Footer />
      </div>
    );
  }
}

export default App;