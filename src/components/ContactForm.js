import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Input = styled.input`
  padding: 5px;
  width: 200px;
`;

const Label = styled.div`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Message = styled.textarea`
  font-size: 12px;
  padding: 10px;
  width: 400px;
`;

export function ContactForm({ name, email, message, updateProp }) {
  return (
    <Wrapper>
      <Label>Name</Label>
      <Input value={name} onChange={e => updateProp("name", e.target.value)} />
      <Label>Email</Label>
      <Input
        value={email}
        onChange={e => updateProp("email", e.target.value)}
      />
      <Label>Message</Label>
      <Message
        value={message}
        rows="10"
        onChange={e => updateProp("message", e.target.value)}
      />
    </Wrapper>
  );
}

ContactForm.defaultProps = {
  name: "",
  email: "",
  message: ""
};

ContactForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string,
  updateProp: PropTypes.func
};
