import React from 'react'
import flowersImg from '../assets/howToMakePurchase-flowers.png'

const OrderSteps = () => {
  return (
    <section className="order-steps-section">
      {/* Картинка цветов слева */}
      <div className="order-flowers-wrapper">
        <img src={flowersImg} alt="Пионы" className="order-flowers-img" />
      </div>

      <div className="order-steps-container">
        {/* Заголовок */}
        <h2 className="order-steps-title">
          КАК СДЕЛАТЬ <br /> ЗАКАЗ
        </h2>

        {/* Разделитель над шагами */}
        <div className="order-steps-divider"></div>

        {/* Сетка шагов */}
        <div className="steps-grid">
          {/* Левая колонка шагов */}
          <div className="steps-column">
            <div className="step-item">
              <h3 className="step-number">1 ШАГ</h3>
              <p className="step-text">
                ВЫБЕРИТЕ КАКИЕ ЦВЕТЫ ИЛИ ПОДАРКИ <br /> ВЫ ХОТИТЕ КУПИТЬ
              </p>
            </div>

            <div className="step-item">
              <h3 className="step-number">2 ШАГ</h3>
              <p className="step-text">
                ОФОРМИТЕ ЗАКАЗ, И МЫ ОТПРАВИМ ВАМ <br />
                ПОДТВЕРЖДЕНИЕ НА ЭЛЕКТРОННУЮ ПОЧТУ, <br />
                А ТАК ЖЕ МЕНЕДЖЕР СВЯЖЕТСЯ С ВАМИ ПО <br />
                ТЕЛЕФОНУ ИЛИ В WHATSAPP
              </p>
            </div>

            <div className="step-item">
              <h3 className="step-number">3 ШАГ</h3>
              <p className="step-text">
                НАШИ ФЛОРИСТЫ БЕРЕЖНО ПОДОЙДУТ К <br />
                СОЗДАНИЮ БУКЕТА ЦВЕТОВ В САМОМ НАЧАЛЕ <br />
                ДНЯ ИЛИ НАКАНУНЕ
              </p>
            </div>
          </div>

          {/* Правая колонка шагов */}
          <div className="steps-column">
            <div className="step-item">
              <h3 className="step-number">4 ШАГ</h3>
              <p className="step-text">
                ОДИН ИЗ НАШИХ КУРЬЕРОВ ИЛИ <br />
                ПАРТНЁРОВ ДОСТАВИТ ВАШ ЗАКАЗ ПО <br />
                УКАЗАННОМУ АДРЕСУ. МЫ ОТПРАВИМ <br />
                ВАМ СООБЩЕНИЕ В WHATSAPP КАК <br />
                ТОЛЬКО ЗАКАЗ БУДЕТ ДОСТАВЛЕН
              </p>
            </div>

            <div className="step-item">
              <h3 className="step-number">5 ШАГ</h3>
              <p className="step-text">
                НАСЛАЖДАЙТЕСЬ ЦВЕТАМИ, ЕСЛИ <br />
                ВЫ ЗАКАЗАЛИ ИХ ДЛЯ ДОМА ИЛИ <br />
                ЛЮБОВЬЮ, КОТОРОЙ ПОДЕЛИТЕСЬ, <br />
                ЕСЛИ ВЫ ЗАКАЗАЛИ ДЛЯ ДРУГА
              </p>
            </div>
          </div>
        </div>

        {/* Фоновое рукописное слово Lover Flower внизу справа */}
        <div className="watermark-signature">Lover Flower</div>
      </div>

      {/* Вертикальная фиолетово-розовая полоса справа */}
      <div className="right-accent-line"></div>
    </section>
  )
}

export default OrderSteps