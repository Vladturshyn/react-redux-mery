import React, { Component } from 'react';
import { Field, reduxForm,reset } from 'redux-form';
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";

import style from './index.module.scss';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 3) {
    errors.name = 'Must be 3 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error} }) => (
  <div className={style.container}>
    <label
     className={ touched && error ? `${style.errorLabel}` : null}>
     <p>{label}</p>
    </label>
    {touched && ((error && <span className={style.errors}>{error}</span>))}
      <input 
        className={touched && error ? `${style.wrapInput} ${style.notValid}` : `${style.wrapInput}`}
        {...input}
        type={type}
        autoComplete="off"
        />
  </div>
)

const renderMessageField = ({input, label, type}) =>(
  <div className={style.containerMessage}>
    <label><p>{label}</p></label>
    <textarea 
      className={style.wrapInputMessage}
      {...input} 
      type={type} 
      name={label}>
    </textarea>
  </div>
)

class SyncValidationForm extends Component {
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
    const { handleSubmit, submitting} = this.props;
    return (
      <ScrollableAnchor id={"contacts"}>
        <div>
          <div className={style.wrapText}>
            <p>CONTACT US</p>
          </div>
          <div className={style.mainWrap}>
            <form 
            onSubmit={handleSubmit} 
            className={style.wrapForm}
            >

              <div className={style.leftSide}>
                <Field name="name" type="text" component={renderField} label="Name"/>
                <Field name="email" type="email" component={renderField} label="Email"/>
                <Field name="phone" type="phone" component={renderField} label="Phone"/>
              </div>
              <div className={style.rightSide}>
                <Field name="message" component={renderMessageField} label="Message"/>
                <div className={style.wrapBtn}>
                  <button 
                    type="submit" 
                    disabled={submitting}
                    ><p>Request trial</p></button>
                </div>
              </div>
            </form>
          </div>
      </div>
    </ScrollableAnchor>
    )
  }
}

const afterSubmit = (result, dispatch) =>{ 
  dispatch(reset('syncValidation')); 
}

export default reduxForm({
  form: 'syncValidation',
  onSubmitSuccess: afterSubmit,  
  validate,
})(SyncValidationForm)