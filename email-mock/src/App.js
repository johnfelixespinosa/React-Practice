import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Email from './components/email';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Email emailInfo={email}/>    
      </div>
    );
  }
}

var email =	{
	sender: "React Newsletter",
	subject: "React Newsletter - Issue 36",
	date: "Jul 15",
	message: "React Newsletter Issue 36 - July 15th Read this issue on the web http://reactjsnewsletter.com/issues/36?sid=3QGDYBX ### Comme" 
}
export default App;
