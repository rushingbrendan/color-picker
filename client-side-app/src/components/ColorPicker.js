import React, { Component } from 'react';

import '../css/bootstrap.min.css';
import '../css/HeaderBar.css';
import '../css/ColorPicker.css';
import '../css/ColorSlider.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { faEyeDropper} from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';



library.add(faStroopwafel);
library.add(faEyeDropper);
library.add(faPlusCircle);
library.add(faMinusCircle);


class ColorPicker extends Component {
    constructor(){
      super();

      this.state = { 
          favoriteColors: [],
          colorHexCode: 0,
          red: 0,
          green: 0,
          blue: 0,
        };

    }
    updateRed(event) {

        this.setState({
          red: event.target.value
        });
        
        return true;
    }

    updateGreen(event) {

        this.setState({
          green: event.target.value
        });
        
        return true;
    }

    updateBlue(event) {

        this.setState({
          blue: event.target.value
        });
        
        return true;
    }

    // addColor(event) {

    //     // Create 

    //     // Populate html object for color card.
    //     this.state.favoriteColors.push()
    //     // this.setState({
    //     //   red: event.target.value
    //     // });
        
    //     return true;
    // }


    addFavourite() {  
         
        var hexColorCode = this.rgb2hex(this.state.red, this.state.green, this.state.blue);

        //Check if selected item is already in array
        if (!this.state.favoriteColors.includes(hexColorCode)){
            //add item to array            
            this.state.favoriteColors.push(hexColorCode);   
        }
    }



    /* 
        Function name: updateSearchInput
        
        Purpose:    Function is called when the text in the input search box has changed.
                    The value from the event is put into searchInput variable in class state.
                
        Parameters:     event
        Return:         true
    */
   updateSearchInput(event, colorOrder) {

    // This is red.
    if (colorOrder === 1){

        
        // Set the red color state.
        this.setState({
            red: event.target.value
        });
        
    }

    // This is green.
    else if (colorOrder === 2){

        // Set the green color state.
        this.setState({
            green: event.target.value
        });
    }

    // This is blue.
    else if (colorOrder === 3){

        // Set the blue color state.
        this.setState({
            blue: event.target.value
        });
    }


    
    return true;
}

    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
  
    rgbToHex(r, g, b) {        

        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
  
  //alert(rgbToHex(0, 51, 255)); // #0033ff

    rgb2hex(red, green, blue) {
        var rgb = blue | (green << 8) | (red << 16);

        var returnString = '#' + (0x1000000 + rgb).toString(16).slice(1);        
        returnString = returnString.toUpperCase();

        //return '#' + (0x1000000 + rgb).toString(16).slice(1);
        return returnString;
    }    

    renderColorHexCode(){

        var hexColorCode = this.rgb2hex(this.state.red, this.state.green, this.state.blue);

        return (<div><h1>{hexColorCode}</h1></div>)
    }

    renderFavoriteColors(){


        return (<div className="container">
            <div className="row">

            {this.state.favoriteColors.map(currentColor=>    
            <div className="shadow-sm p-3 mb-5 bg-white rounded col-4" style={{ backgroundColor: `white`, borderColor: `black`, borderWidth: `5px` }}>
                <div className="alert alert-dismissible fade show" role="alert" >
                    <h5>{currentColor}</h5>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                </button>
                <hr></hr>
                
                        <div className="" style={{ backgroundColor: `${currentColor}` }}>
                        <br></br>
                        <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                        </div>
                    

                </div>
            </div>
            )}
        </div>
        </div>)
    }



    render() {
      return (        
        <div>
            <br></br>
            <div className="container">
                <h1>Create Color</h1>
             </div>
            
            <hr></hr>
            <br></br>               
               <div className="container">
                  <table>
                    <tbody>
                        <tr>                    
                            <th>
                                <h3>Red&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                            </th>
                            <th style={{width: '100px', alignItems: 'right'}}>                            
                                <input type="text" class="form-control" placeholder="" maxLength='3' value={this.state.red}
                                    onChange={event => this.updateSearchInput(event,1)}
                                    onKeyDown={event => {
                                        if (event.target.value === ''){
                                            //this.submitForm()
                                        }                                        
                                        else if (event.key === 'Enter') {                        
                                            //this.submitForm();
                                        }                      
                                    }}>
                                </input>
                            </th>
                            <th>
                            {/* <FontAwesomeIcon icon="minus-circle" size="2x" color="#ff0000" /> */}
                            
                            </th>
                            <th>
                            {/* <FontAwesomeIcon icon="plus-circle" size="2x" color="#13bf41"/> */}
                            </th>
                            <th><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></th>
                            
                            <th style={{width: '600px',
                                        alignItems: 'right' }}>                        
                                <input className="slider" id="redSlider" type="range" min="0" max="256" defaultValue="3" step="1"
                                onChange={event => this.updateRed(event)}
                                />
                            </th>
                            <th style={{width: '50px',
                                        alignItems: 'right' }}>      
                            <h1>{this.state.red}</h1>
                            </th>
                            


                        </tr>
                    </tbody>
                </table>                
               </div>
               {/* <br></br> */}
               <div className="container">
               <table>
                   <tbody>
                        <tr>                    
                            <th>
                            <h3>Green&nbsp;&nbsp;&nbsp;</h3>
                            </th>

                            <th style={{width: '100px',
                                    alignItems: 'right'}}>
                            {/* <NumericInput min={0} max={256} value={50}/>   */}
                            <input type="text" class="form-control" placeholder="" maxLength='3' value={this.state.green}
                             onChange={event => this.updateSearchInput(event,2)}
                             onKeyDown={event => {
                            if (event.target.value === ''){
                                //this.submitForm()
                            }                                        
                            else if (event.key === 'Enter') {                        
                                //this.submitForm();
                            }                      
                            }}>
                            </input>

                        </th>
                        <th>
                        {/* <FontAwesomeIcon icon="minus-circle" size="2x" color="#ff0000"/> */}
                        </th>
                        <th>
                        {/* <FontAwesomeIcon icon="plus-circle" size="2x" color="#13bf41"/> */}
                        </th>
                        <th><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></th>
                        <th style={{width: '600px',
                                    alignItems: 'right' }}>                        
                            <input className="slider" id="greenSlider" type="range" min="0" max="256" defaultValue="3" step="1"
                            onChange={event => this.updateGreen(event)}/>
                        </th>
                        <h1>{this.state.green}</h1>
                        </tr>
                    </tbody>
                </table>                
               </div>
               {/* <br></br> */}
               <div className="container">
               <table>
                   <tbody>
                        <tr>                    
                            <th>
                            <h3>Blue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                            </th>
                            <th style={{width: '100px',
                                    alignItems: 'right'}}>
                            {/* <NumericInput min={0} max={256} value={50}/>   */}
                            <input type="text" class="form-control" placeholder="" maxLength='3' value={this.state.blue}
                             onChange={event => this.updateSearchInput(event,3)}
                             onKeyDown={event => {
                            if (event.target.value === ''){
                                //this.submitForm();
                            }                                        
                            else if (event.key === 'Enter') {                        
                                //this.submitForm();
                            }                      
                            }}>
                            </input>

                        </th>
                        <th>
                        {/* <FontAwesomeIcon icon="minus-circle" size="2x" color="#ff0000"/> */}
                        </th>
                        <th>
                        {/* <FontAwesomeIcon icon="plus-circle" size="2x" color="#13bf41"/> */}
                        </th>
                        <th><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></th>
                        <th style={{width: '600px',
                                    alignItems: 'right' }}>                        
                            <input className="slider" id="blueSlider" type="range" min="0" max="256" defaultValue="3" step="1"
                            onChange={event => this.updateBlue(event)}/>
                        </th>
                        <th>
                            <h1>{this.state.blue}</h1>
                        </th>
                        </tr>
                </tbody>
            </table>                
               </div>

               {/* <br></br> */}
               <hr></hr>

               <div className="container">
                <div className="form-row">

                    <div className="col-2">
                        <div>{this.renderColorHexCode()}</div>
                    </div>

                    <div className="col-6">                    
                        <button type="button" class="btn btn-success"
                            onClick={event => this.addFavourite(event)}> Copy Color </button>        
                    </div>                    
                </div>
               </div>               
               <br></br>
               <div className="container">
  
  
    <div className="container" 
    style={{ backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})` }}>
        <br></br>
        <br></br>
        <br></br>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>        
  
        <br></br>
        <br></br>
  </div>
</div>
<br></br>
<div>{this.renderFavoriteColors()}</div>
<br></br>
         </div>
      );
    }
  }
  
  export default ColorPicker;