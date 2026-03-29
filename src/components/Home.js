import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container my-5 p-3 p-md-5">
            <img src="profilepic.jpg" alt="Your Name" className="profile-image" />
            <div className="profile-text">
                <h2>Vishnu Prasad S</h2>
                <p>
                    Motivated software developer  with skills in C#, VB.NET, JavaScript, and MERN stack. Experienced in building web applications, REST APIs, and working with SQL Server and MongoDB. Passionate about problem-solving and eager to contribute to innovative projects while continuously learning and growing.
                </p>
            </div>
        </div>
    );
};

export default Home;
