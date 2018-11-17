import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { addNewForm } from "../actions/mainAction";

class ContainerForm extends Component {
 handleSubmit = values => {
  const form = new FormData();

  form.append("email", values.email);
  form.append("name", values.name);
  form.append("message", values.message);
  form.append("phone", values.phone);

  this.props.addNewForm(form);
 };   
 render() {
    return (
      <div>
         <Form onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
      addNewForm: form => dispatch(addNewForm(form))
    };
};

export default connect(null, mapDispatchToProps)(ContainerForm)
