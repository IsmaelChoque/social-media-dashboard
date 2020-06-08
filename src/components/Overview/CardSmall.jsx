import React from 'react'
import './CardSmall.css'

const CardSmall = ({icon, pageViews, growth}) => {
  return (
    <div className="card-small">
      <p className="card-small-views">Page Views</p>
      <p className="card-small-icon">
        <img src={icon} alt="imagen"/>
      </p>
      <p className="card-small-number">
        {pageViews}
      </p>
      <p className="card-small-percentage">
        <span>
          {growth < 0
          ?
            <img src="images/icon-down.svg" alt="down"/>
          :
            <img src="images/icon-up.svg" alt="up"/>
          }
          {growth}%
        </span>
      </p>
    </div>
  );
}
 
export default CardSmall;