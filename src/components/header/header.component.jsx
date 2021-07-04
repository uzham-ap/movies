import React from 'react';
import "./header.styles.css"
import {Link} from 'react-router-dom'

const Header = () => {
    return ( 
    <div>
        <header className="Header">
            <div>
                <Link to="/"><h2>TAMILANDA</h2></Link>
            </div>
            <div>
                <Link to="/series">SERIES</Link>
                <Link to="/movies">MOVIES</Link>
                <a href="https://t.me/joinchat/T1eBGezYkAhmY2Jl" target="_blank" rel="noreferrer">GROUP</a>
            </div>
        </header>
    </div>
    );
}
 
export default Header;