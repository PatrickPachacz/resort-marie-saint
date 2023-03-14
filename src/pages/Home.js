import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from 'react';


export default function Home(){
    return(
        <main>
            <section className="containerPic">
                <img src="./beach.jpg" alt="beach" className="beach"/>
           </section>

            <section id="hero">
                <img src="./fleur-de-lis.png" className="fleur" alt="fleur"/>
                <h1>Welcome to Sainte-Marie Resort!</h1>
                <p>Experience the beauty of the Caribbean at our luxurious resort. Enjoy pure indulgence, relaxation and romance at one of the most sought-after destinations in the world. Remember, the most important thing to do here is to relax! You can count on us to put your health and wellness first throughout your stay.</p>
                <ul><CustomLink to="/rooms" className="cta">Book Now</CustomLink></ul>
            </section>
    
            <section id="about">
                <img src="./couple.jpg" alt="couple" className="couple"/>
                <h2>About Our Resort</h2>
                <p>Located on the white sandy beaches of the Caribbean, Sainte-Marie Resort offers guests the ultimate tropical getaway. With a variety of accommodations, delicious dining options, and a wide range of activities, there's something for everyone at our resort.</p>
                <i class="fa-regular fa-heart">Spa services</i>
                <i class="fa-solid fa-mug-saucer">In-Room Dinning</i>
                <i class="fa-regular fa-bell">24 Hour Service</i>
            </section>

            <section id="rooms">
                <h2>Accommodations</h2>
                <p>Choose from a variety of room types, each designed with your comfort in mind. All of our rooms feature private balconies with ocean views, and some even include private pools.</p>
                <img src="./resort-room.jpg" alt="resort-room" className="resortroom"/>
            </section>
   
   
        </main>
 

    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}