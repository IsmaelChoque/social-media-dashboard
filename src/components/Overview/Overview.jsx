import React from 'react'
import './Overview.css'
import CardSmall from './CardSmall'

const cardSmallList = [
  {
    icon: 'images/icon-facebook.svg',
    pageViews: '87',
    growth: 3,
    key: 1
  }, {
    icon: 'images/icon-facebook.svg',
    pageViews: '52',
    growth: 2257,
    key: 2
  }, {
    icon: 'images/icon-facebook.svg',
    pageViews: '5462',
    growth: 1375,
    key: 3
  }, {
    icon: 'images/icon-facebook.svg',
    pageViews: '117',
    growth: 303,
    key: 4
  }
]

const Overview = () => {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {cardSmallList.map(dataList => (
            <CardSmall
              key={dataList.key}
              icon={dataList.icon}
              pageViews={dataList.pageViews}
              growth={dataList.growth}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Overview;