import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { ContactForm } from "./ContactForm";
// import { sendMail } from "../services/Mailer";

export function Contact(props) {
  const sendEmail = () => {
    // sendMail();
    clearProps();
  };

  const clearProps = () => {
    props.name = "";
    props.email = "";
    props.message = "";
  };

  const updateProp = (prop, value) => {
    props[prop] = value;
  };

  return (
    <Fragment>
      <h1>Contact Me</h1>
      <ContactForm
        updateProp={updateProp}
        name={props.name}
        email={props.email}
        message={props.message}
      />
      <button onClick={sendEmail}>Send</button>
    </Fragment>
  );
}

Contact.defaultProps = {
  name: "",
  email: "",
  message: ""
};

Contact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string
};
