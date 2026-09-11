import React, { useState } from 'react'
import questionsFlowers from '../assets/questions-flowers.png'

const Questions = () => {
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
    // Обработка отправки формы
    console.log('Form data:', formData)
  }

  return (
    <section className="questions-section">
      {/* Зеленые листья строго внутри блока слева */}
      <div className="questions-flowers-wrapper">
        <img
          src={questionsFlowers}
          alt="Листва"
          className="questions-flowers-img"
        />
      </div>

      <div className="questions-container">
        {/* Левая часть: Заголовок и водяной знак */}
        <div className="questions-left">
          <h2 className="questions-title">
            ОСТАЛИСЬ <br /> ВОПРОСЫ?
          </h2>
          <div className="questions-watermark">have any questions?</div>
        </div>

        {/* Правая часть: Форма */}
        <div className="questions-right">
          <p className="questions-desc">
            ОТПРАВЬТЕ ВАШ ВОПРОС, ЗАКАЗ, ПРЕДЛОЖЕНИЕ ИЛИ ЖАЛОБУ ЧЕРЕЗ ФОРМУ
            ОБРАТНОЙ СВЯЗИ, И НАШ СПЕЦИАЛИСТ СВЯЖЕТСЯ С ВАМИ В ТЕЧЕНИЕ 15 МИНУТ.
          </p>

          <form onSubmit={handleSubmit} className="questions-form">
            <input
              type="text"
              name="name"
              placeholder="ВАШЕ ИМЯ"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="+7 (977) 777-77-77"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
            <textarea
              name="comment"
              placeholder="ВАШ КОММЕНТАРИЙ"
              value={formData.comment}
              onChange={handleChange}
              className="form-textarea"
              rows="4"
            ></textarea>

            <button type="submit" className="form-submit-btn">
              ОТПРАВИТЬ
            </button>

            <p className="form-privacy">
              Нажимая на кнопку «Отправить», я даю свое согласие на обработку
              персональных данных, в соответствии с{' '}
              <a href="#privacy">Политикой конфиденциальности</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Questions