import React from 'react';
import './styles/component.css';

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {count : 0};
    }

    onPlus = () =>{
        this.setState({count : this.state.count + 1})
    }
    onMinus = () =>{
        this.setState({count : this.state.count - 1})
    }
    onRestart = () => {
        this.setState({count : 0})
    }

    render(){
        return(
            <React.Fragment>
            
               <div className="displayStyle">
                {this.state.count}
                </div>
                
                <div className="buttonStyle">
                <div className="three ui icon buttons">
                    <button className="ui button" onClick={this.onPlus} style={{backgroundColor : "#C5E9A2"}}>
                        <i className="plus icon"></i>
                    </button>
                    <button className="ui button" onClick={this.onRestart} style={{backgroundColor : "#EBDA43"}}>
                        <i className="sync alternate icon"></i>
                    </button>
                    <button className="ui button" onClick={this.onMinus} style={{backgroundColor : "#F52D69"}}>
                        <i className="minus icon"></i>
                    </button>
                    </div>
                </div>
                

             
            </React.Fragment>
        );
    }
}

export default Counter;