import React, { Component } from 'react';
import ColorCard from '../components/ColorCard.js';

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
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import {faCopy } from '@fortawesome/free-solid-svg-icons';



library.add(faStroopwafel);
library.add(faEyeDropper);
library.add(faPlusCircle);
library.add(faMinusCircle);
library.add(faRandom);
library.add(faCopy);


class ColorPicker extends Component {
    constructor(){
      super();
      this.removeColorCard = this.removeColorCard.bind(this);


      this.state = { 
          favoriteColors: [],
          colorHexCode: 0,
          red: 0,
          green: 0,
          blue: 0,
        };

    }

    

    //Set Red Color
    setRed(inputRed){        

        // Set the redcolor state.
        this.setState({
            red: inputRed
        });
    }

    // Set Green Color.
    setGreen(inputGreen){
        
        // Set the green color state.
        this.setState({
            green: inputGreen
        });
    }

    // Set Blue Color.
    setBlue(inputBlue){
    
        // Set the blue color state.
        this.setState({
            blue: inputBlue
        });
    }

    // Update Red Color State.
    updateRed(event) {

        // Set the red color state.
        this.setState({
          red: event.target.value
        });
        
        return true;
    }

    // Update Green Color State.
    updateGreen(event) {

        // Set the green color state.
        this.setState({
          green: event.target.value
        });
        
        return true;
    }

    // Update Blue Color State.
    updateBlue(event) {

        this.setState({
          blue: event.target.value
        });
        
        return true;
    }

    // Add favorite
    addFavorite() {  
         
        var hexColorCode = this.rgb2hex(this.state.red, this.state.green, this.state.blue);

        //Check if selected item is already in array
        if (!this.state.favoriteColors.includes(hexColorCode)){
                        
            //add item to array                    
            this.setState(prevState => ({
                favoriteColors: [...prevState.favoriteColors, hexColorCode]
            }))
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

    /** 
     * Convert color code to hex value  
     * @param {component} c 
     */
    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
  
    /**
     * Convert rgb color code to hex value
     * @param {red} r 
     * @param {green} g 
     * @param {blue} b 
     */
    rgbToHex(r, g, b) {        

        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
  

    rgb2hex(red, green, blue) {
        var rgb = blue | (green << 8) | (red << 16);

        var returnString = '#' + (0x1000000 + rgb).toString(16).slice(1);        
        returnString = returnString.toUpperCase();
        
        return returnString;
    }    

    renderColorHexCode(){

        var hexColorCode = this.rgb2hex(this.state.red, this.state.green, this.state.blue);

        return (<div><h3>{hexColorCode}</h3></div>)
    }

    // Randomize the current color
    randomizeColors(){

    // Get random numbers.
    var red = this.randomizeColor(this.state.red);
    var green = this.randomizeColor(this.state.green);
    var blue = this.randomizeColor(this.state.blue);

    // Assign random numbers to state.
    this.setRed(red);
    this.setGreen(green);
    this.setBlue(blue);
        
    }

    randomizeColor(inputColor){

        if ((inputColor < 257) && (inputColor > -1)){
            //valid number
            //alert(inputColor);

            // Create a random number between 0 and 256.
            var randomNum = Math.floor(Math.random() * 256);


            //alert (randomNum);
            // Return random color rgb value
            return randomNum;
        }
    }



    removeA(arr) {
        var what, a = arguments, L = a.length, ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax= arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    }



    removeColorCard(color){

        if (this.state.favoriteColors.indexOf(color) > -1) {

            this.setState({
                favoriteColors: this.removeA(this.state.favoriteColors, color)

            })

            //this.state.favoriteColors.splice(color, 1);


        } 
    }

    renderFavoriteColors(){


        return (<div className="container">
            <div className="row p-5">

            {this.state.favoriteColors.map(currentColor=>   
            
                <ColorCard cardColor={currentColor} onClick={() => this.removeColorCard(currentColor)}></ColorCard>
            )}
        </div>
        </div>)
    }



    render() {
      return (        
        <div>
            
            <div className="container">
                <h1>Create Color</h1>
             </div>
            
            <hr></hr>
            
               <div className="container">
                  <table>
                    <tbody>
                        <tr>                    
                            <th>
                                <h3>Red&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                            </th>
                            <th style={{width: '100px', alignItems: 'right'}}>                            
                                <input type="text" className="form-control" placeholder="" maxLength='3' value={this.state.red}
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
                            <input type="text" className="form-control" placeholder="" maxLength='3' value={this.state.green}
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
                            <input type="text" className="form-control" placeholder="" maxLength='3' value={this.state.blue}
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
               <hr></hr>

               <div className="container">
                <div className="form-row">
                    <div className="col-3">
                        <div>{this.renderColorHexCode()}</div>
                    </div>
                    <div className="col-3">
                        <h3>{`rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}</h3>
                    </div>
                </div>
                <hr></hr>
                <div className="form-row">
                
                <div className="col-4">                    
                        <button type="button" className="btn btn-success"                        
                            onClick={event => this.addFavorite(event)}> <h3 class><FontAwesomeIcon icon="copy" size="1x" color="white"></FontAwesomeIcon> Copy Color </h3></button>        
                    </div>            
                    <div className="col-2">                    
                        <button type="button" className="btn btn-dark"                        
                            onClick={event => this.randomizeColors(event)}> <h3 class><FontAwesomeIcon icon="random" size="1x" color="#ffe710"></FontAwesomeIcon> Random</h3></button>        
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