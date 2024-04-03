import React, { useState } from 'react';
import '../Component_CSS/Cards.css';
import chair1 from '../image/chairs/chair1.jpeg';
import bed1 from '../image/beds/bed1.jpeg';
import bed2 from '../image/beds/bed2.jpeg';
import sofa12 from '../image/sofas/sofa12.jpeg';
import table3 from '../image/table/table3.jpeg';
import table6 from '../image/table/table6.jpeg';

const Card = () => {
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
            <h1 className='h_head'>Featured Collections</h1>
            <h5 className='h_title'>Most Selling & Trending Products</h5>

            <div className="cards">
                <div className="card" onClick={handleCardClick}>
                    <div className="card__image-holder">
                        <img className="card__image" src={chair1} alt="mountain" />
                    </div>
                    <div className="card-title">
                        <a href="#" className="toggle-info btn">
                            <span className="left"></span>
                            <span className="right"></span>
                        </a>
                        <h2>
                            Elegant Garden Chair 
                            <small>$123.0</small>
                        </h2>
                    </div>
                    <div className="card-flap flap1">
                        
                        <div className="card-flap flap2">
                            <div className="card-actions">
                                <a href="#" className="btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" onClick={handleCardClick}>
                    <div className="card__image-holder">
                        <img className="card__image" src={bed2} alt="field" />
                    </div>
                    <div className="card-title">
                        <a href="#" className="toggle-info btn">
                            <span className="left"></span>
                            <span className="right"></span>
                        </a>
                        <h2>
                            Luxurious Wooden Bed
                            <small>$111.11</small>
                        </h2>
                    </div>
                    <div className="card-flap flap1">
    
                        <div className="card-flap flap2">
                            <div className="card-actions">
                                <a href="#" className="btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" onClick={handleCardClick}>
                    <div className="card__image-holder">
                        <img className="card__image" src={sofa12} alt="water" />
                    </div>
                    <div className="card-title">
                        <a href="#" className="toggle-info btn">
                            <span className="left"></span>
                            <span className="right"></span>
                        </a>
                        <h2>
                            Luxuray Lounge Sofa
                            <small>$1207.03</small>
                        </h2>
                    </div>
                    <div className="card-flap flap1">
                       
                        <div className="card-flap flap2">
                            <div className="card-actions">
                                <a href="#" className="btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" onClick={handleCardClick}>
                    <div className="card__image-holder">
                        <img className="card__image" src={bed1} alt="water" />
                    </div>
                    <div className="card-title">
                        <a href="#" className="toggle-info btn">
                            <span className="left"></span>
                            <span className="right"></span>
                        </a>
                        <h2>
                            Dreamy Creations
                            <small>$1995.0</small>
                        </h2>
                    </div>
                    <div className="card-flap flap1">
                        
                        <div className="card-flap flap2">
                            <div className="card-actions">
                                <a href="#" className="btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" onClick={handleCardClick}>
                    <div className="card__image-holder">
                        <img className="card__image" src={table3} alt="water" />
                    </div>
                    <div className="card-title">
                        <a href="#" className="toggle-info btn">
                            <span className="left"></span>
                            <span className="right"></span>
                        </a>
                        <h2>
                            Vintage Inspired Table
                            <small>$20.00</small>
                        </h2>
                    </div>
                    <div className="card-flap flap1">
                       
                        <div className="card-flap flap2">
                            <div className="card-actions">
                                <a href="#" className="btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" onClick={handleCardClick}>
                    <div className="card__image-holder">
                        <img className="card__image" src={table6} alt="water" />
                    </div>
                    <div className="card-title">
                        <a href="#" className="toggle-info btn">
                            <span className="left"></span>
                            <span className="right"></span>
                        </a>
                        <h2>
                            Urban Study Table
                            <small>$77.77</small>
                        </h2>
                    </div>
                    <div className="card-flap flap1">
                       
                        <div className="card-flap flap2">
                            <div className="card-actions">
                                <a href="#" className="btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
