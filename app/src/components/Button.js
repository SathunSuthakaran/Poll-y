import React from "react";

const Button = ({content, image}) => {
    return (
        <div className="poll-image-container"><div className="option-header">{content}</div><img className="poll-image" src={image} alt={content}/></div>
    )
};




export default Button;