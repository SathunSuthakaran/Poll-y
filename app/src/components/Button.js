import React from "react";



const Button = ({content, image, option}) => {
    const UpdateCount = (option) => {
        fetch("http://localhost:4000/api/update_count", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  // Ensure the content type is set correctly
            },
            body: JSON.stringify(option)  // Send the 'option' inside a JSON object
        })
        .then((res) => res.json())
        .then((data) => console.log('Success:', data))
        .catch((err) => console.error('Error:', err));
    };
    
    
    const handleClick = () => {
        UpdateCount();
        console.log(JSON.stringify(option))
        //ProgessBar();
    }

    return (
        <button onClick={handleClick} className="poll-image-container"><h2 className="option-header">{content}</h2><img className="poll-image" src={image} alt={content}/></button>
    )
};




export default Button;