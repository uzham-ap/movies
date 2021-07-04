import React from 'react';
import './movie-container.styles.css'

const MoviesCard = (props) => {
    return ( 
        <div className="Seperate-Movie" onClick={()=> window.open(props.link, "_blank")}>
            <div className="image-container" style={{background: `url(${props.img}) center center/cover`}}>
                <div className="ratings">{props.ratings} <img alt="star" src="https://img.icons8.com/material-rounded/24/000000/star--v2.png"/></div>
            </div>
            <p>{props.name} ({props.year})</p>
        </div>
     );
}
 
export default MoviesCard;