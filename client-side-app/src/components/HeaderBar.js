import React, { Component } from 'react';
import '../css/HeaderBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { faEyeDropper} from '@fortawesome/free-solid-svg-icons';
//import { faGitHub } from '@fortawesome/free-solid-svg-icons';


library.add(faStroopwafel);
library.add(faEyeDropper);
//library.add(faGitHub);


class HeaderBar extends Component {
    constructor(){
      super();
      this.state = {
  
      }
    }

    render() {
      return (        
        <div>
            <nav className="navbar navbar-expand-md navbar-custom">
                <a style={{ fontWeight: 'bold', fontSize: '18pt' }} className="navbar-brand" href="/home">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="eye-dropper" size="2x" /> &nbsp;&nbsp;Color Codes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a style={{marginTop: '20px', fontSize: '14pt'}} className="nav-link" href="/dashboard">Favorite Colors</a>
                    </li>
                    <li className="nav-item active">
                        <a style={{marginTop: '20px', fontSize: '14pt'}} className="nav-link" href="/color">Colorboard </a>
                    </li>
                    <li className="nav-item active">
                        <a style={{marginTop: '20px', fontSize: '14pt'}} className="nav-link" href="/dashboard">Dashboard</a>
                    </li>
                    <li className="nav-item active">                        
                        <a style={{marginTop: '20px', fontSize: '14pt'}} className="nav-link" href="/dashboard">GitHub</a>
                    </li>
                </ul>
                {/* <ul class="nav navbar-nav ml-auto">
                <li className="nav-item active">                        
                        <a style={{marginTop: '20px', fontSize: '14pt'}} className="nav-link" href="/dashboard">Dashboard</a>
                    </li>
                </ul> */}

                </div>
            </nav>
        </div>
      );
    }
  }
  
  export default HeaderBar;