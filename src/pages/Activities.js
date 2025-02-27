import React from 'react'

export default function Activities(){
    return (
    <main>
        <header className="activitiesHeader">
            <h1>Resort Activities in Sainte-Marie</h1>
            <h2>Leave your worries behind...</h2>
        </header>

    

        <div className="container">
            <h1 className="act-h1">Scuba Diving</h1>
            <div className="description">Our resort offers a variety of water sports such as scuba diving, snorkeling, kayaking, and paddleboarding. The Caribbean is known for its clear waters and diverse marine life, so whether you're a beginner or an experienced diver, you'll have the opportunity to explore the underwater world.</div>
                <img src="./scuba.jpg" className="actImage" alt="scuba" />
                
        </div>
                
            <br className="br1"></br>

        <div className="container">
            <img src="./volleyball.png" className="actImage" alt="volleyball" />
                <div className="description">If you're looking for a fun way to stay active while soaking up the sun, we have beach volleyball courts where you can enjoy a game with friends or family.</div>
                <h1 className="act-h1">Volleyball</h1>
        </div>


        <div className="container">
            <h1 className="act-h1">Boat Excursion</h1>
            <div className="description">Our resort offers a range of excursions to explore the beauty of the Caribbean. You can take a boat tour to visit nearby islands or take a hike to explore the local flora and fauna. We also offer zip-lining, ATV tours, and horseback riding excursions for adventure seekers.</div>
                <img src="./boat.jpg" className="actImage" alt="boat" />
                
        </div>
        
        <div className="container">    
            <img src="./spa.jpg" className="actImage" alt="spa" />
                <div className="description">If you're looking for some relaxation, our spa offers a range of services, including massages, facials, and body treatments. Our spa is the perfect place to unwind and rejuvenate during your vacation.</div>
                <h1 className="act-h1">Spa</h1>
        </div>


        <div className="container">
            <h1 className="act-h1">Nightlife</h1>
            <div className="description">Our resort has a vibrant nightlife with live music, dancing, and entertainment. You can enjoy a cocktail while listening to local musicians, or dance the night away under the stars.</div>
                <img src="./nightlife.jpg" className="actImage" alt="nightlife" />
                
        </div>
        
        <div className="container">
            <img src="./yoga.jpg" className="actImage" alt="yoga" />
                 <div className="description">For those looking to maintain their fitness routine while on vacation, we offer yoga and fitness classes. Our trained instructors will guide you through various exercises and help you stay active during your stay.</div>
                 <h1 className="act-h1">Yoga</h1>
        </div>








    </main>

    )
}
