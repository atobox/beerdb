//API CORS is disabled that's why API query is not possible. 
//So I downloaded the JSON file and accessed the data from there.

import React, {useEffect, useState} from 'react';
import './App.css';
import TopNav from './Components/TopNavBar';
import DropDown from './Components/DropDown';
//const axios = require('axios');

var brData =  require("./AppJSONData/beercraftTxt.json");
var beerImgLnk = require("./AppJSONData/beerimages.json");  

class App extends React.Component {
  
  constructor(props)  {
    super(props)
    this.dtpointer = 0;
    this.state = {
      beerData: brData.slice(this.dtpointer, this.dtpointer + 20),      
    };    
  }

  dcr = () => { 
    if (this.dtpointer - 20 >= 0) {
      (this.dtpointer -= 20);
      this.setState({beerData: brData.slice(this.dtpointer, this.dtpointer + 20),});
    }
  }
  
  incr = () => { 
    if (this.dtpointer + 20 < brData.length) {
      this.dtpointer += 20;
      this.setState({beerData: brData.slice(this.dtpointer, this.dtpointer + 20),});
    }
  }  

  pageOffset = (offset) => {
    this.dtpointer = 20 * offset;
    this.setState({beerData: brData.slice(this.dtpointer, this.dtpointer + 20),});
  }

  render()  {    
    let imgIdx = 0;
    return (
      <div>
        <TopNav /><div style={{height: "100px"}}></div>
        {this.state.beerData && this.state.beerData.map(dt => {
          (imgIdx === 5) && (imgIdx = 0);        
          return(
          <DropDown prefaceContent={<div>
              <div className="dspTxt">{dt.name}</div>
             <img className="thumbImg" src={beerImgLnk[imgIdx].image} alt={dt.name + " Image"}/>
            </div>}
             id={dt.id} key={dt.id}>
            <div className="infoCard">
              <center><img className="drpImg" src={beerImgLnk[imgIdx++].image} alt={dt.name + " Image"}/>                        
             <table><tbody>
                <tr>
                  <th><label>I.D.:</label></th>
                  <td><p>{dt.id}</p></td>
                </tr>
                <tr>
                  <th><label>I.B.U.:</label></th>
                  <td><p>{dt.ibu}</p></td>
                </tr>
                <tr>
                  <th><label>A.B.V.:</label></th>
                  <td><p>{dt.abv}</p></td>
                </tr>
                <tr>
                  <th><label>Name:</label></th>
                  <td><p>{dt.name}</p></td>
                </tr>
                <tr>
                  <th><label>Style:</label></th>
                  <td><p>{dt.style}</p></td>
                </tr>
                <tr>
                  <th><label>Ounces:</label></th>
                  <td><p>{dt.ounces}</p></td>
                </tr></tbody>
             </table>                    
              </center>
            </div>
         </DropDown>
          );
       })}
       <div style = {{height: "20vh"}}></div>
      <footer>
        <div className="lst">
          <div className="lstItem" onClick={this.dcr}><span className="glyphicon glyphicon-menu-left"></span></div>
          <div className="lstItem" onClick={() => this.pageOffset(((this.dtpointer + 20) / 20) - 1)}>{(this.dtpointer + 20) / 20}</div>
          <div className="lstItem" onClick={() => this.pageOffset(((this.dtpointer + 40) / 20) - 1)}>{(this.dtpointer + 40) / 20}</div>
          <div className="lstItem" onClick={() => this.pageOffset(((this.dtpointer + 60) / 20) - 1)}>{(this.dtpointer + 60) / 20}</div>
          <div className="lstItem" onClick={this.incr}><span className="glyphicon glyphicon-menu-right"></span></div>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
