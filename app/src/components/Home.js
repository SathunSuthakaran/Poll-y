import React, { useState } from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    const [thread, setThread] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ thread });
        setThread("");
    };
    const createThread = () => {
        fetch("http://localhost:4000/api/create/thread", {
            method: "POST",
            body: JSON.stringify({
                thread,
                userId: localStorage.getItem("_id"),
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.error(err));
    };
    useEffect(() => {
        const checkUser = () => {
            if (!localStorage.getItem("_id")) {
                navigate("/");
            } else {
                console.log("Authenticated");
            }
        };
        checkUser();
    }, [navigate]);

    return (
        <>
            <Nav />
            <main className='home'>
                <h2 className='homeTitle'>Create a Thread</h2>
                <form className='homeForm' onSubmit={handleSubmit}>
                    <div className='home__container'>
                        <label htmlFor='thread'>Title / Description</label>
                        <input
                            type='text'
                            name='thread'
                            required
                            value={thread}
                            onChange={(e) => setThread(e.target.value)}
                        />
                    </div>
                    <button className='homeBtn'>CREATE THREAD</button>
                </form>
            </main>
        </>
    );
};

export default Home;