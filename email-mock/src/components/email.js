import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './email.css';

function Email({ emailInfo }) {
  var { sender, subject, date, message } = emailInfo;

  return (
    <div className="email">
      <input type="checkbox"/>
      <i className="fa fa-thumb-tack pin"/>
      <div className="content">
        <div className="line1">
          <div className="sender">{sender}</div>
          <div className="subject">{subject}</div>
          <div className="date">{date}</div>
        </div>
        <div className="message">{message}</div>
      </div>
    </div>
  );

}

export default Email;