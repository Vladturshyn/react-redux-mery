import React, { Component } from "react";

import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";

import Header from "../components/Header";
import Services from "../components/Services";
import SmallMenu from "../components/SmallMenu";
import HowItWorks from "../components/HowItWorks";
import OurTeam from "../components/OurTeam";
import Tools from "../components/Tools";
import Deals from "../components/Deals";
import Form from "../components/Form";
import Footer from "../components/Footer";

import { connect } from "react-redux";
import { addNewForm } from "../actions/mainAction";

import "normalize.css";

class App extends Component {
  handleSubmit = values => {
    const form = new FormData();

    form.append("email", values.email);
    form.append("name", values.name);
    form.append("message", values.message);
    form.append("phone", values.phone);

    this.props.addNewForm(form);
  };

  render() {
    configureAnchors({ scrollDuration: 900 });
    return (
      <div>
        <ScrollableAnchor id={"head"}>
          <Header />
        </ScrollableAnchor>
        <ScrollableAnchor id={"services"}>
          <Services />
        </ScrollableAnchor>
        <SmallMenu />
        <ScrollableAnchor id={"works"}>
          <HowItWorks />
        </ScrollableAnchor>
        <ScrollableAnchor id={"team"}>
          <OurTeam />
        </ScrollableAnchor>
        <ScrollableAnchor id={"tools"}>
          <Tools />
        </ScrollableAnchor>
        <ScrollableAnchor id={"deals"}>
          <Deals />
        </ScrollableAnchor>
        <ScrollableAnchor id={"contacts"}>
          <Form onSubmit={this.handleSubmit} />
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewForm: form => dispatch(addNewForm(form))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);