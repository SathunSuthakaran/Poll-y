import React from "react";

const Button = ({content, image}) => {
    return (
        <div className="poll-image-container"><h2 className="option-header">{content}</h2><img className="poll-image" src={image} alt={content}/></div>
    )
};




export default Button;