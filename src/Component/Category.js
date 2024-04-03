import React from 'react';
import '../Component_CSS/cat.css';
import { NavLink,Link } from "react-router-dom";
import lamps from '../image/cat_image/lamps.png';
import bed from '../image/cat_image/bed.png';
import Chair from '../image/cat_image/Chair.png';
import table from '../image/cat_image/table.png';
import sofa from '../image/cat_image/sofa.png';


export default function Category() {
  return (
    <>
      <div className='cat'>
      <h1>SHOP BY CATEGORY</h1>
      <div className='cat_tab'>

        {/* Lamp */}
        <div className="category-item">
        <NavLink exact to="/Lamp">
          <img src={lamps} alt="Lamps" />
        </NavLink>
          {/* <Link to="./lamps">
            <img src={lamps} alt="Lamps" />
          </Link> */}
          <div className="category-info">
              <h3>Lamps</h3>
            </div>
        </div>

        {/* Sofa */}
        <div className="category-item">
        <NavLink exact to="/Sofa">
          <img src={sofa} alt="Sofa" />
        </NavLink>
          {/* <Link to="./Sofa">
            <img src={sofa} alt="Sofa" />
          </Link> */}
          <div className="category-info">
              <h3>Sofas</h3>
            </div>
        </div>

        {/* Table */}
        <div className="category-item">
          <Link to="/table">
            <img src={table} alt="Table" />
          </Link>
          <div className="category-info">
              <h3>Tables</h3>
            </div>
        </div>

        {/* Bed */}
        <div className="category-item">
          <Link to="/bed">
            <img src={bed} alt="Bed" />
          </Link>
          <div className="category-info">
              <h3>Beds</h3>
            </div>
        </div>

        {/* Chair */}
        <div className="category-item">
          <Link to="/Chair">
            <img src={Chair} alt="Chair" />
          </Link>
          <div className="category-info">
              <h3>Chairs</h3>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
