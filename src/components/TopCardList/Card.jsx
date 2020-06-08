import React from 'react'
import './Card.css'

const Card = ({data}) => {

  const {username, followers, todayFollowers, icon, name} = data

  const cardClass = `card ${name}`

  return (
    <article className={cardClass}>
      <p className="card-title">
        <img src={icon} alt="imagen"/>
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        {todayFollowers < 0 
        ? 
          <img src="images/icon-down.svg" alt="down"/>
        : 
          <img src="images/icon-up.svg" alt="up"/>
        }
        {todayFollowers} Today
      </p>
    </article>
  );
}
 
export default Card;