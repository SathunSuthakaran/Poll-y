import React from "react";



const Button = ({content, image, option}) => {
    const UpdateCount = () => {
        fetch("http://localhost:4000/api/update_count", {
            method: "POST",
            body: {option}})
            .then((res) => res.json())
            .catch((err) => console.error(err));
    };
    const handleClick = () => {
        UpdateCount();
        //ProgessBar();
    }

    return (
        <button onClick={handleClick} className="poll-image-container"><h2 className="option-header">{content}</h2><img className="poll-image" src={image} alt={content}/></button>
    )
};




export default Button;