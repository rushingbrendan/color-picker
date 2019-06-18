import React, { Component } from 'react';

import '../css/bootstrap.min.css';



class ColorCard extends Component {
    constructor(){
      super();

      this.state = { 

        };


    }


    onClick = () => {
        this.props.onClick(this.props.cardColor);
      }

    render() {
      return (        
        <div className="shadow-sm p-3 mb-5 bg-white rounded col-4" style={{ backgroundColor: `white`, borderColor: `black`, borderWidth: `5px` }}>                
                <div className="alert alert-dismissible fade show" role="alert" >
                    <h5>{this.props.cardColor}</h5>
                <button type="button" className="close" onClick={() => this.onClick()}>
                        <span aria-hidden="true">&times;</span>
                </button>
                <hr></hr>
                
                        <div className="" style={{ backgroundColor: `${this.props.cardColor}` }}>
                        <br></br>
                        <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                        </div>
                        </div> 
                    

            </div>
      );
    }
  }
  
  export default ColorCard;