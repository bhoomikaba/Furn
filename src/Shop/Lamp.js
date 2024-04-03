import React from 'react';
import '../Shop_css/lamp.css';
import lamp0 from '../image/lamps/lamp0.jpeg';
import lamp1 from '../image/lamps/lamp1.jpeg';
import lamp2 from '../image/lamps/lamp2.jpeg';
import lamp3 from '../image/lamps/lamp3.jpeg';
import lamp4 from '../image/lamps/lamp4.jpeg';
import lamp5 from '../image/lamps/lamp5.jpeg';
import lamp6 from '../image/lamps/lamp6.jpeg';
import lamp7 from '../image/lamps/lamp7.jpeg';
import lamp8 from '../image/lamps/lamp8.jpeg';
import lamp9 from '../image/lamps/lamp9.jpeg';
import lamp11 from '../image/lamps/lamp11.jpeg';
import lamp12 from '../image/lamps/lamp12.jpeg';

export default function Lamp() {

  const handleCardClick = (e) => {
    e.preventDefault();

    const card = e.currentTarget;
    const isShowing = card.classList.contains("show");

    const cardsContainer = document.querySelector("div.cards");
    const showingCards = document.querySelectorAll("div.card.show");

    if (cardsContainer.classList.contains("showing")) {
        // A card is already in view
        showingCards.forEach(showingCard => showingCard.classList.remove("show"));

        if (!isShowing) {
            // This card isn't showing - get in with it
            const highestZIndex = Math.max(...Array.from(showingCards).map(c => parseInt(window.getComputedStyle(c).getPropertyValue('z-index')), 10));
            card.style.zIndex = highestZIndex + 1;
            card.classList.add("show");
        } else {
            // This card was showing - reset the grid
            cardsContainer.classList.remove("showing");
        }
    } else {
        // No cards in view
        cardsContainer.classList.add("showing");
        const highestZIndex = Math.max(...Array.from(showingCards).map(c => parseInt(window.getComputedStyle(c).getPropertyValue('z-index')), 10));
        card.style.zIndex = highestZIndex + 1;
        card.classList.add("show");
    }
}; 


  return (
    <div>
         <div>
        <h1 className='h_head'>LAMP COLLECTION</h1>
        <h5 className='h_title'>Most Selling & Trending Lamps</h5>

        <div className="cards">
            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={lamp12} alt="mountain" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Glowing Style Statements
                        <small>$123.0</small>
                    </h2>
                </div>
                <div className="card-flap flap1">
                    
                    <div className="card-flap flap2">
                        <div className="card-actions">
                            <a href="/" className="btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={lamp11} alt="field" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Lighting Up Elegance
                        <small>$111.11</small>
                    </h2>
                </div>
                <div className="card-flap flap1">

                    <div className="card-flap flap2">
                        <div className="card-actions">
                            <a href="/" className="btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={lamp9} alt="water" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Radiant Decor Accents
                        <small>$1207.03</small>
                    </h2>
                </div>
                <div className="card-flap flap1">
                   
                    <div className="card-flap flap2">
                        <div className="card-actions">
                            <a href="/" className="btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={lamp8} alt="water" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Chic Illumination 
                        <small>$1995.0</small>
                    </h2>
                </div>
                <div className="card-flap flap1">
                    
                    <div className="card-flap flap2">
                        <div className="card-actions">
                            <a href="/" className="btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={lamp7} alt="water" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Shine in Style
                        <small>$20.00</small>
                    </h2>
                </div>
                <div className="card-flap flap1">
                   
                    <div className="card-flap flap2">
                        <div className="card-actions">
                            <a href="/" className="btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={lamp6} alt="field" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Illuminate with Grace
                        <small>$111.11</small>
                    </h2>
                </div>
                <div className="card-flap flap1">

                    <div className="card-flap flap2">
                        <div className="card-actions">
                            <a href="/" className="btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={lamp4} alt="field" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Glamour in Every Glow
                        <small>$111.11</small>
                    </h2>
                </div>
                <div className="card-flap flap1">

                    <div className="card-flap flap2">
                        <div className="card-actions">
                            <a href="/" className="btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={lamp0} alt="field" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Lighting Inspired Spaces
                        <small>$111.11</small>
                    </h2>
                </div>
                <div className="card-flap flap1">

                    <div className="card-flap flap2">
                        <div className="card-actions">
                            <a href="/" className="btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={lamp1} alt="field" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Elevate with Light
                        <small>$111.11</small>
                    </h2>
                </div>
                <div className="card-flap flap1">

                    <div className="card-flap flap2">
                        <div className="card-actions">
                            <a href="/" className="btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={lamp5} alt="field" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Lamps of Distinction
                        <small>$111.11</small>
                    </h2>
                </div>
                <div className="card-flap flap1">

                    <div className="card-flap flap2">
                        <div className="card-actions">
                            <a href="/" className="btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={lamp3} alt="field" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Illuminate Your World
                        <small>$111.11</small>
                    </h2>
                </div>
                <div className="card-flap flap1">

                    <div className="card-flap flap2">
                        <div className="card-actions">
                            <a href="/" className="btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={lamp2} alt="water" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Lighting, Redefined
                        <small>$77.77</small>
                    </h2>
                </div>
                <div className="card-flap flap1">
                   
                    <div className="card-flap flap2">
                        <div className="card-actions">
                            <a href="/" className="btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
