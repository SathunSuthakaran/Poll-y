import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./Progress";


const Nav = () => {
    const [leftPercent, setLeftPercent] = useState(0);  // State for left percentage
    const [rightPercent, setRightPercent] = useState(0); // State for right percentage
    const navigate = useNavigate();
    const signOut = () => {
        localStorage.removeItem("_id");
        //👇🏻 redirects to the login page
        navigate("/");
    };
    useEffect(() => {
        const fetch_pcts = () => {
            fetch("http://localhost:4000/api/progress_count", {
                method: "POST",
                body: {}})
                .then((res) => res.json()).then((data) => {
                    setLeftPercent(data.left);
                    setRightPercent(data.right);
                })
                .catch((err) => console.error(err));
        };
        fetch_pcts();
    }, []);
    return (
        <nav className='navbar'>
            <h2>POLL-Y</h2>
            <ProgressBar leftPercent={(leftPercent/(leftPercent+rightPercent) * 100).toFixed(2)} rightPercent={(rightPercent / (leftPercent+rightPercent) * 100).toFixed(2)} />
            <div className='navbarRight'>
                <button onClick={signOut}>Sign out</button>
            </div>
        </nav>
    );
};

export default Nav;