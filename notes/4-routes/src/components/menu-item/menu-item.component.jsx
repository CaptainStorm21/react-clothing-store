import React from 'react';
import './menu-item.styles.scss'

//  withrouter is is it's a higher order component 
//  and a higher order component is essentially
//  a function that takes a component as an argument 
//  and which turns you a modified component.
import { withRouter } from 'react-router-dom';


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`}
         onClick={()=> history.push(`${match.url}${linkUrl}`)}
    >
        <div className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }} 
            onClick = {() => history.push() }
            />
        <div className="content">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <span className="subtitle">
                SHOP NOW!
            </span>
        </div>
    </div>
)

export default withRouter(MenuItem);