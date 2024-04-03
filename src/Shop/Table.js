import React from 'react';
import '../Shop_css/table.css';
import table2 from '../image/table/table2.jpeg'
import table3 from '../image/table/table3.jpeg'
import table4 from '../image/table/table4.jpeg'
import table5 from '../image/table/table5.jpeg'
import table6 from '../image/table/table6.jpeg'
import table7 from '../image/table/table7.jpeg'
import table8 from '../image/table/table8.jpeg'
import table9 from '../image/table/table9.jpeg'



export default function Table() {
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
        <h1 className='h_head'>TABLE COLLECTION</h1>
        <h5 className='h_title'>Most Selling & Trending Tables</h5>

        <div className="cards">
            <div className="card" onClick={handleCardClick}>
                <div className="card__image-holder">
                    <img className="card__image" src={table2} alt="mountain" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Urban Chic Table 
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
                    <img className="card__image" src={table3} alt="field" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Vintage-inspired Table
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
                    <img className="card__image" src={table4} alt="water" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Industrial Loft Console
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
                    <img className="card__image" src={table5} alt="water" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Elegant Marble Accent 
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
                    <img className="card__image" src={table6} alt="water" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Contemporary Woodwork 
                        <small>$200.00</small>
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
                    <img className="card__image" src={table7} alt="field" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Bohemian Boho Chic 
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
                    <img className="card__image" src={table8} alt="field" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                    Art Deco Statement Piece
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
                    <img className="card__image" src={table9} alt="water" />
                </div>
                <div className="card-title">
                    <a href="/" className="toggle-info btn">
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                     Multi-Functional Table
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
};
