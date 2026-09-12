import React from 'react'
import { Link } from 'react-router-dom'

// Импортируем фоновые цветы из папки assets
import aboutFirst from '../assets/about-first-flower.png'
// Если у тебя название файла about-second-flower.png или about-flower-second.png — проверь точное название у себя
import aboutSecond from '../assets/about-second-flower.png' 
import aboutThird from '../assets/about-flower-third.png'

import '../App.css'

const About = () => {
  return (
    <div className="about-page">
      {/* Декоративные фоновые цветы */}
      <img src={aboutFirst} alt="" className="about-bg-flower flower-top-left" />
      <img src={aboutSecond} alt="" className="about-bg-flower flower-middle-left" />
      <img src={aboutThird} alt="" className="about-bg-flower flower-bottom-right" />

      <div className="about-container">
        {/* Хлебные крошки */}
        <div className="breadcrumbs">
          <Link to="/">ГЛАВНАЯ</Link> / <span>О НАС</span>
        </div>

        {/* Главный заголовок */}
        <div className="about-header">
          <h1>О НАС</h1>
        </div>

        {/* Секция: LOVER FLOWER */}
        <section className="about-section lover-flower-section">
          <h2 className="section-title-large">
            LOVER <br /> FLOWER —
          </h2>

          <div className="about-card-blur">
            <h3 className="card-subtitle">
              МОЛОДАЯ КОМАНДА РАЗНЫХ ЛЮДЕЙ С ОДИНАКОВЫМИ ЦЕННОСТЯМИ.
            </h3>
            <p className="card-text">
              Мы считаем, что удовольствие от качества длится дольше, чем удовольствие
              от низкой цены. И поэтому в создание нашей букетерии мы вложили все,
              чем располагаем: душу, сердце, время и мечты! Мы готовы обещать вам только то,
              что можем сделать. А делаем мы только самое качественное, самое интересное
              и обязательно уникальное. Мы всегда честны со своими клиентами во всем –
              в нашем каталоге только те букеты, которые вы действительно сможете купить.
            </p>
          </div>
        </section>

        {/* Секция: ГАРАНТИИ */}
        <section className="about-section guarantees-section">
          <h2 className="section-title-pink">ГАРАНТИИ</h2>
          <p className="guarantees-text">
            КАЖДЫЙ ЦВЕТОК УНИКАЛЕН И ЧТОБЫ ВЫ БЫЛИ УВЕРЕНЫ В КАЧЕСТВЕ, МЫ ПРИШЛЕМ ВАМ ФОТОГРАФИЮ
            ИМЕННО ВАШЕГО БУКЕТА ДО ЕГО ОТПРАВКИ ПОЛУЧАТЕЛЮ. ВСЯ ПРЕДОСТАВЛЕННАЯ ВАМИ ИНФОРМАЦИЯ
            КОНФИДЕНЦИАЛЬНА И БУДЕТ ИЗВЕСТНА ТОЛЬКО НАМ И КУРЬЕРУ ДЛЯ ОСУЩЕСТВЛЕНИЯ ДОСТАВКИ.
          </p>
        </section>

        {/* Секция: ЗАКАЗ БУКЕТОВ... ЭТО: */}
        <section className="about-section perks-section">
          <h2 className="section-title-large">
            ЗАКАЗ БУКЕТОВ НА <br />
            САЙТЕ КОМПАНИИ <br />
            LOVER FLOWER – ЭТО:
          </h2>

          <div className="about-card-blur">
            <ul className="perks-list">
              <li>выбор оттенков и сортов цветков в любое время года;</li>
              <li>отправка фото готовой композиции перед отправкой;</li>
              <li>возможность заказать цветы с доставкой в течение часа;</li>
              <li>выгодные цены – на сайте только те варианты, что Вы сможете купить;</li>
              <li>полная конфиденциальность по заказу;</li>
              <li>мы подбираем открытку, воздушные шары, подарок по Вашему желанию;</li>
              <li>в нашем уютном цветочном магазине цветы, которые приятно дарить.</li>
            </ul>
          </div>
        </section>

        {/* Цитата / Финальный блок */}
        <section className="about-quote-section">
          <h2 className="quote-title">
            ПРИРОДНАЯ ГАРМОНИЯ ЦВЕТА,<br />
            НЕПОВТОРИМОСТЬ БУТОНОВ<br />
            И ВАШИ ЧУВСТВА<br />
            В НЕЖНЫХ ЛЕПЕСТКАХ<br />
            НЕ ОСТАВЯТ НИКОГО<br />
            РАВНОДУШНЫМ.
          </h2>
          <p className="quote-subtitle">
            ВЫ ВЫБИРАЕТЕ И ЗАКАЗЫВАЕТЕ ЦВЕТОЧНЫЙ СЮРПРИЗ,<br />
            А МЫ ВКЛАДЫВАЕМ В НЕГО ДУШУ!
          </p>
        </section>

        {/* Водяной знак Lover Flower */}
        <div className="about-watermark">Lover Flower</div>
      </div>
    </div>
  )
}

export default About