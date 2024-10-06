import React from "react";



const Button = ({content, image, option}) => {
    const UpdateCount = (option) => {
        fetch("http://localhost:4000/api/update_count", {
            method: "POST",
            body: JSON.stringify({ option }),
            headers: {
                "Content-Type": "application/json"  // Ensure Content-Type is application/json
            },
        })
        .then((res) => res.json())
        .then((data) => console.log('Success:', data))
        .catch((err) => console.error('Error:', err));
    };
    
    
    
    const handleClick = () => {
        UpdateCount(option);
        console.log(JSON.stringify(option))
        //ProgessBar();
    }

    return (
        <button onClick={handleClick} className="poll-image-container"><h2 className="option-header">{content}</h2><img className="poll-image" src={image} alt={content}/></button>
    )
};




export default Button;