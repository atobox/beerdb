import React from 'react';
import './App.css';
import TopNav from './Components/TopNavBar';
import DropDown from './Components/DropDown';
//const axios = require('axios');

var beerData =  require("./AppJSONData/beercraftTxt.json");
  
var beerImgLnk = require("./AppJSONData/beerimages.json");  

function App() {
  /*useEffect(() => {
    axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json")
      .then(res => {
        imgData = res.data;
        console.log(imgData);
      })
      .catch(err => err);
  }
  ,[]);*/

  let imgIdx = 0;
  return (
    <div>
      <TopNav />
      {beerData.map(dt => {
        (imgIdx === 5) && (imgIdx = 0);        
        return(
        <DropDown prefaceContent={<div>
            <div className="dspTxt">{dt.name}</div>
            <img className="thumbImg" src={beerImgLnk[imgIdx].image} alt={dt.name + " Image"}/>
          </div>}
           id={dt.id} key={dt.id}>
          <div className="infoCard">
            <center><img className="drpImg" src={beerImgLnk[imgIdx++].image} alt={dt.name + " Image"}/>                        
            <table> <tbody>
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
      
    </div>
  );
}

export default App;
