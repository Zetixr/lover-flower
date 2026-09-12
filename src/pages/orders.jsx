import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Импортируем картинки из папки assets согласно твоим именам
import orderFlowers from '../assets/order-flowers.png'
import successFlower from '../assets/orders-sucsesful.png'
import errorFlowers from '../assets/orders-unsucsesful.png'

const Orders = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    recipientPhone: '',
    recipientName: '',
    comment: '',
    deliveryType: 'courier',
    city: '',
    street: '',
    building: '',
    house: '',
    office: '',
    deliveryTime: '',
    paymentType: 'card_online',
    promoCode: '',
  })

  // 'form' | 'success' | 'error'
  const [orderState, setOrderState] = useState('form')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errorMessage) setErrorMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Пример логики проверки (Валидация):
    // Все обязательные поля должны быть заполнены
    const isBasicValid = formData.name.trim() && formData.phone.trim() && formData.email.trim()
    const isDeliveryValid = formData.deliveryType === 'pickup' || (formData.city && formData.street.trim())

    if (isBasicValid && isDeliveryValid) {
      // ПРАВИЛЬНО ВВЕДЕНЫ ПОЛЯ -> УСПЕХ
      setOrderState('success')
    } else {
      // НЕПРАВИЛЬНО ВВЕДЕНЫ ПОЛЯ -> ОШИБКА
      setErrorMessage('Пожалуйста, проверьте правильность заполнения всех обязательных полей.')
      setOrderState('error')
    }
  }

  // Сбросить статус и вернуться к форме
  const handleTryAgain = () => {
    setOrderState('form')
  }

  // ==========================================
  // 1. ЭКРАН: ОПЛАТА ПРОШЛА УСПЕШНО!
  // ==========================================
  if (orderState === 'success') {
    const orderNumber = Math.floor(100000 + Math.random() * 900000)

    return (
      <div className="order-result-page">
        <div className="order-result-container">
          <div className="order-result-content">
            <h1 className="result-title">
              ОПЛАТА ПРОШЛА <br /> УСПЕШНО!
            </h1>

            <div className="result-info">
              <p className="order-num">Ваш номер заказа — <span>№{orderNumber}</span></p>
              <p className="order-desc">
                Вся информация о заказе была отправлена на вашу почту <strong>{formData.email}</strong>
              </p>
            </div>

            <Link to="/" className="result-btn">
              НА ГЛАВНУЮ
            </Link>

            <div className="watermark-text">Lover Flower</div>
          </div>

          <div className="order-result-image">
            <img src={successFlower} alt="Успешная оплата" />
          </div>
        </div>
      </div>
    )
  }

  // ==========================================
  // 2. ЭКРАН: ОШИБКА ПЛАТЕЖА
  // ==========================================
  if (orderState === 'error') {
    return (
      <div className="order-result-page">
        <div className="order-result-container">
          <div className="order-result-content">
            <h1 className="result-title error-title">
              ОШИБКА <br /> ПЛАТЕЖА
            </h1>

            <div className="result-info">
              <p className="error-reason">{errorMessage || 'Произошла ошибка при обработке данных.'}</p>
              <p className="order-desc">Попробуйте повторить попытку или свяжитесь с поддержкой.</p>
            </div>

            <button type="button" onClick={handleTryAgain} className="result-btn error-btn">
              ПОПРОБОВАТЬ ЕЩЕ РАЗ
            </button>
          </div>

          <div className="order-result-image">
            <img src={errorFlowers} alt="Ошибка платежа" />
          </div>
        </div>
      </div>
    )
  }

  // ==========================================
  // 3. ОСНОВНАЯ ФОРМА ОФОРМЛЕНИЯ ЗАКАЗА
  // ==========================================
  return (
    <div className="order-page">
      <div className="order-flowers-bg">
        <img src={orderFlowers} alt="Декоративные цветы" />
      </div>

      <div className="order-container">
        <div className="breadcrumbs">
          ГЛАВНАЯ / <span>ОФОРМЛЕНИЕ ЗАКАЗА</span>
        </div>

        <div className="order-header-title">
          <h1>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
          <span className="order-watermark">Lover Flower</span>
        </div>

        <h2 className="order-section-subtitle">ОФОРМЛЕНИЕ ЗАКАЗА</h2>

        <form onSubmit={handleSubmit} className="order-content">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="order-form-left">
            <h3 className="form-group-title">КОНТАКТНЫЕ ДАННЫЕ</h3>

            <div className="form-field">
              <label>Ваше имя*</label>
              <input
                type="text"
                name="name"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label>Ваш телефон*</label>
              <input
                type="tel"
                name="phone"
                placeholder="+7 (977) 777-77-77"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label>Ваш e-mail*</label>
              <input
                type="email"
                name="email"
                placeholder="Введите вашу почту"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label>Телефон получателя (необязательно)</label>
              <input
                type="tel"
                name="recipientPhone"
                placeholder="+7 (977) 777-77-77"
                value={formData.recipientPhone}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label>Имя получателя (необязательно)</label>
              <input
                type="text"
                name="recipientName"
                placeholder="Введите имя получателя"
                value={formData.recipientName}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label>Комментарий к заказу</label>
              <textarea
                name="comment"
                placeholder="Примечания к вашему заказу"
                value={formData.comment}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <h3 className="form-group-title" style={{ marginTop: '40px' }}>
              ДОСТАВКА
            </h3>

            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="deliveryType"
                  value="pickup"
                  checked={formData.deliveryType === 'pickup'}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span>САМОВЫВОЗ</span>
              </label>

              <label className="radio-label">
                <input
                  type="radio"
                  name="deliveryType"
                  value="courier"
                  checked={formData.deliveryType === 'courier'}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span>ДОСТАВКА КУРЬЕРОМ</span>
              </label>
            </div>

            <div className="form-field">
              <label>Город*</label>
              <select name="city" value={formData.city} onChange={handleChange}>
                <option value="">Выберите город</option>
                <option value="minsk">Минск</option>
              </select>
            </div>

            <div className="form-field">
              <label>Улица*</label>
              <input
                type="text"
                name="street"
                placeholder="Введите улицу"
                value={formData.street}
                onChange={handleChange}
              />
            </div>

            <div className="form-row-three">
              <div className="form-field">
                <label>Корп/стр</label>
                <input type="text" name="building" value={formData.building} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label>Дом</label>
                <input type="text" name="house" value={formData.house} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label>Кв/офис</label>
                <input type="text" name="office" value={formData.office} onChange={handleChange} />
              </div>
            </div>

            <div className="form-field">
              <label>Время доставки</label>
              <input
                type="text"
                name="deliveryTime"
                placeholder="Укажите время"
                value={formData.deliveryTime}
                onChange={handleChange}
              />
            </div>

            <h3 className="form-group-title" style={{ marginTop: '40px' }}>
              ОПЛАТА
            </h3>

            <div className="radio-group-vertical">
              <label className="radio-label">
                <input
                  type="radio"
                  name="paymentType"
                  value="card_online"
                  checked={formData.paymentType === 'card_online'}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span>БАНКОВСКОЙ КАРТОЙ</span>
              </label>
              {/* Другие способы оплаты... */}
            </div>

            <div className="promocode-block">
              <input
                type="text"
                name="promoCode"
                placeholder="ПРОМОКОД"
                value={formData.promoCode}
                onChange={handleChange}
                className="promocode-input"
              />
              <button type="button" className="promocode-btn">ПРИМЕНИТЬ</button>
            </div>

            <div className="order-bottom-summary">
              <div className="total-price-row">
                <span className="total-label">ОБЩАЯ СУММА ЗАКАЗА</span>
                <span className="total-amount">334.00 ₽</span>
              </div>
              <div className="delivery-note">ДОСТАВКА - 0 ₽</div>

              <button type="submit" className="order-submit-btn">
                К ОПЛАТЕ
              </button>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА */}
          <div className="order-summary-box">
            <h3 className="form-group-title">ВАШ ЗАКАЗ:</h3>
            <div className="order-items-list">
              <div className="order-item">
                <div className="order-item-title">РУБИНОВЫЕ ИСКРЫ</div>
                <div className="order-item-price">167.00 ₽</div>
              </div>
            </div>
            <div className="order-subtotal">
              ПРЕДВАРИТЕЛЬНЫЙ ИТОГ: <span>334.00 ₽</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Orders