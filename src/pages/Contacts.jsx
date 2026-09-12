import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Импорт декоративных роз из папки assets
import contactsFirst from '../assets/contacts-first-flower.png'
import contactsSecond from '../assets/contacts-second-flower.png'

import '../App.css'

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Ваше сообщение успешно отправлено!')
    setFormData({ name: '', phone: '', comment: '' })
  }

  return (
    <div className="contacts-page">
      {/* Декоративные розы на фоне */}
      <img src={contactsFirst} alt="" className="contacts-bg-flower flower-top-right" />
      <img src={contactsSecond} alt="" className="contacts-bg-flower flower-middle-left" />

      <div className="contacts-container">
        {/* Хлебные крошки */}
        <div className="breadcrumbs">
          <Link to="/">ГЛАВНАЯ</Link> / <span>КОНТАКТЫ</span>
        </div>

        {/* Главный заголовок */}
        <h1 className="contacts-title">КОНТАКТЫ</h1>

        {/* Верхний блок: 4 карточки с данными */}
        <div className="contacts-cards-grid">
          <div className="contact-card">
            <span className="card-label">ВРЕМЯ РАБОТЫ</span>
            <p className="card-value">с 10:00 до 21:00<br />без выходных</p>
          </div>

          <div className="contact-card">
            <span className="card-label">АДРЕС</span>
            <p className="card-value">г. Минск, ул. Тимирязева<br />67, комн. 112</p>
          </div>

          <div className="contact-card">
            <span className="card-label">ТЕЛЕФОН</span>
            <p className="card-value">+375 (29) 113-69-69</p>
          </div>

          <div className="contact-card">
            <span className="card-label">E-MAIL</span>
            <p className="card-value">zakaz@loverflower.by</p>
          </div>
        </div>

        {/* Блок формы обратной связи */}
        <div className="feedback-section">
          <div className="feedback-left">
            <h2 className="feedback-title">НАПИШИТЕ<br />НАМ</h2>
            <div className="feedback-handwriting">Lover Flower</div>
          </div>

          <div className="feedback-right">
            <p className="feedback-description">
              ОТПРАВЬТЕ ВАШ ВОПРОС, ЗАКАЗ, ПРЕДЛОЖЕНИЕ ИЛИ ЖАЛОБУ ЧЕРЕЗ ФОРМУ ОБРАТНОЙ СВЯЗИ, И НАШ СПЕЦИАЛИСТ СВЯЖЕТСЯ С ВАМИ В ТЕЧЕНИЕ 15 МИНУТ.
            </p>

            <form onSubmit={handleSubmit} className="feedback-form">
              <input
                type="text"
                name="name"
                placeholder="ВАШЕ ИМЯ"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="+375 (29) 000-00-00"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="comment"
                placeholder="ВАШ КОММЕНТАРИЙ"
                rows="4"
                value={formData.comment}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="form-submit-btn">
                ОТПРАВИТЬ
              </button>

              <p className="form-privacy">
                Нажимая на кнопку «Отправить», вы даете согласие на обработку персональных данных.
              </p>
            </form>
          </div>
        </div>

        {/* Карта */}
        <div className="map-section">
          <h3 className="map-title">МЫ НА КАРТЕ</h3>
          <div className="map-wrapper">
            <iframe
              title="Lover Flower Location"
              src="https://yandex.ru/map-widget/v1/?ll=27.513511%2C53.921319&z=15&pt=27.513511,53.921319,pm2rdm"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts