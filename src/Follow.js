import React from 'react';
import './Follow.css';

function Follow({image, name, handle}) {
    return (
        <div className="follow">
            <div className="follow_details">
                <img src={image} alt={name}/>
                <div className="follow_info">
                    <h3>{name}</h3>
                    <h4>{handle}</h4>
                </div>
            </div>
            <p>Follow</p>
        </div>
    )
}

export default Follow;
