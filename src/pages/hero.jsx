import React from 'react'
import Flowers from "../assets/flowers-hands.png"
import "../App.css"
const hero = () => {
  return (
    <div>
        <img src={Flowers} alt="" className='flowers-hands'/>
        <div className="title"><h1>Lover</h1><br /><h1>Flower</h1></div>
        <p>Создаем для тех кто ценит</p>
        <button className="catalog-btn">Сотреть какталог</button>
    </div>
  )
}

export default hero