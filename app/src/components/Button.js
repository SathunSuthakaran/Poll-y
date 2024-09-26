import React from "react";

const Button = ({content, image}) => {
    return (
        <div className="poll-image-container"><h1 className="option-header">{content}</h1><img className="poll-image" src={image} alt={content}/></div>
    )
};




export default Button;