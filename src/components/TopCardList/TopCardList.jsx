import React from 'react'
import './TopCardList.css'
import Card from './Card'

const cardListData = [
  {
    username: '@_isma_ch',
    id: 1,
    followers: '1596',
    todayFollowers: 12,
    icon: 'images/icon-facebook.svg',
    name: 'facebook'
  }, {
    username: '@_isma_ch',
    id: 2,
    followers: '28k',
    todayFollowers: 20,
    icon: 'images/icon-twitter.svg',
    name: 'twitter'
  }, {
    username: '@_isma_ch',
    id: 3,
    followers: '6k',
    todayFollowers: 30,
    icon: 'images/icon-instagram.svg',
    name: 'instagram'
  }, {
    username: '@_isma_ch',
    id: 4,
    followers: '12k',
    todayFollowers: -50,
    icon: 'images/icon-youtube.svg',
    name: 'youtube'
  }
]

const TopCardList = () => {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map(cardData => (
            <Card
              key={cardData.id}
              data={cardData}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default TopCardList;