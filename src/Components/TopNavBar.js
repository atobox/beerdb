import React from 'react';
import logo from '../images/beerdblogo.JPG';

export default function TopNav(props)  {
    return (
        <div className="topnav">
            <div className="navbar">
                <img src={logo} alt="BeerDBLogo"/>
                <p>BeerDB</p>            
            </div>
            <input type="text" onChange={(e) => { props.onChange(e.target.value) }} placeholder="Search beer name"/>
        </div>
    );
}