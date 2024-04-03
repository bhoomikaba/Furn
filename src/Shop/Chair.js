import React from 'react';
import '../Shop_css/chair.css';
import chair1 from '../image/chairs/chair1.jpeg';
import chair2 from '../image/chairs/chair2.jpeg';
import chair3 from '../image/chairs/chair3.jpeg';
import chair4 from '../image/chairs/chair4.jpeg';
import chair7 from '../image/chairs/chair7.jpeg';
import chair9 from '../image/chairs/chair9.jpeg';
import chair10 from '../image/chairs/chair10.jpeg';
import chair12 from '../image/chairs/chair12.jpeg';

export default function Chair() {

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
        <h1 className='h_head'>CHAIR COLLECTION</h1>
        <h5 className='h_title'>Most Selling & Trending Chairs</h5>

        <div className="cards">
            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={chair1} alt="mountain" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
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
                            <a href="/" className="btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={chair2} alt="field" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Vintage Velvet Lounge
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
                    <img className="card__image" src={chair3} alt="water" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Boho Wicker Wonder
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
                    <img className="card__image" src={chair4} alt="water" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Elegant Eames Chair
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
                    <img className="card__image" src={chair10} alt="water" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Classic Wingback Chair
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
                    <img className="card__image" src={chair7} alt="field" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Retro Rocking Recliner
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
                    <img className="card__image" src={chair9} alt="field" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Industrial Loft Seating
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
                    <img className="card__image" src={chair12} alt="water" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Outdoor Oasis Armchair
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
