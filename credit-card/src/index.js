import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function CreditCard({ cardInfo }) {
  let {name, expireDate, creditCardNumber, bankName} = cardInfo

  return(
    <div className='credit-card'>
      <div className='cardInfo'>
        <div className='name'>{name}</div>
        <div className='expire-date'>{expireDate}</div>
        <div className='cc-number'>{creditCardNumber}</div>
        <div className='bankName'>{bankName}</div>
      </div>
    </div>
  )
} 

CreditCard.propTypes = {
  cardInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    expireDate: PropTypes.string.isRequired,
    creditCardNumber: PropTypes.number.isRequired,
    bankName: PropTypes.string.isRequired
  }).isRequired
}

var testCardInfo = {
  name: 'CARDHOLDER NAME',
  expireDate: '08/19',
  creditCardNumber: 123456789000,
  bankName: 'Ally Bank'
}

ReactDOM.render(<CreditCard cardInfo={testCardInfo} />, 
  document.getElementById('root')
);

