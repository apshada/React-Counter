//importing of libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import './styles/component.css';
import './styles/header.css'




//creating a class component
class App extends React.Component{
  
  render(){
    return(
      <> 
      <div className="ui fluid container"  >
        <div className="head" > 
        <h1 className="headingContent">React Clicker</h1>
        </div>
      <Counter  />
      </div>
      </>
    );
  }
  
}
 
 ReactDOM.render(<App />, document.querySelector("#root"));