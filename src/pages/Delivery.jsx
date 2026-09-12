import React from 'react'
import { Link } from 'react-router-dom'

// Импорт фоновых пионов по порядку из assets
import deliveryFirst from '../assets/delivery-first-flower.png'
import deliverySecond from '../assets/delivery-second-flower.png'
import deliveryThird from '../assets/delivery-third-flower.png'

import '../App.css'

const Delivery = () => {
  return (
    <div className="delivery-page">
      {/* Декоративные пионы (слои фона) */}
      <img src={deliveryFirst} alt="" className="delivery-bg-flower flower-1" />
      <img src={deliverySecond} alt="" className="delivery-bg-flower flower-2" />
      <img src={deliveryThird} alt="" className="delivery-bg-flower flower-3" />

      <div className="delivery-container">
        {/* Хлебные крошки */}
        <div className="breadcrumbs">
          <Link to="/">ГЛАВНАЯ</Link> / <span>ДОСТАВКА И ОПЛАТА</span>
        </div>

        {/* Заголовок страницы */}
        <div className="delivery-header">
          <h1>ДОСТАВКА<br />И ОПЛАТА</h1>
        </div>

        {/* Уведомление для клиентов */}
        <div className="delivery-notice">
          <span className="notice-pink-bar"></span>
          <div className="notice-text">
            <h4 className="pink-title">ДОРОГИЕ КЛИЕНТЫ!</h4>
            <p>
              ВО ВРЕМЯ ПАНДЕМИИ (COVID-19) КОМПАНИЯ LOVER FLOWER ПРИЗЫВАЕТ ВСЕХ МЕНЬШЕ
              КОНТАКТИРОВАТЬ С ДРУГИМИ ЛЮДЬМИ ДЛЯ ЗАЩИТЫ СЕБЯ И СВОИХ БЛИЗКИХ. ИМЕННО
              ПОЭТОМУ МЫ ОРГАНИЗОВАЛИ <strong>БЕСКОНТАКТНУЮ ДОСТАВКУ</strong>.
            </p>
          </div>
        </div>

        {/* Карточки: Способы оплаты */}
        <section className="delivery-section">
          <h3 className="section-title">СПОСОБЫ ОПЛАТЫ:</h3>
          <div className="payment-cards">
            <div className="payment-card">
              <p>БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ ИЛИ ПО ССЫЛКЕ</p>
            </div>
            <div className="payment-card">
              <p>НАЛИЧНЫМИ, БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ ИЛИ С РАСЧЕТНОГО СЧЕТА ОРГАНИЗАЦИИ</p>
            </div>
            <div className="payment-card">
              <p>НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ</p>
            </div>
            <div className="payment-card">
              <p>КРИПТОВАЛЮТОЙ</p>
            </div>
          </div>
        </section>

        {/* Стоимость доставки */}
        <section className="delivery-section">
          <h3 className="section-title">СТОИМОСТЬ ДОСТАВКИ:</h3>
          <ul className="delivery-list">
            <li>
              <span className="mint-text">БЕСПЛАТНО</span> – ПРИ ЗАКАЗЕ НА СУММУ <span>ОТ 90 РУБЛЕЙ</span>
            </li>
            <li>
              <span className="mint-text">10 РУБЛЕЙ</span> – ПРИ ЗАКАЗЕ НА СУММУ <span>МЕНЕЕ 90 РУБЛЕЙ</span>
            </li>
            <li>
              ТАК ЖЕ ВЫ МОЖЕТЕ ЗАБРАТЬ ВАШ ЗАКАЗ САМОСТОЯТЕЛЬНО ПО АДРЕСУ:<br />
              <span className="mint-text">Г. МИНСК, УЛ. ТИМИРЯЗЕВА Д. 67, КОМН. 112 ЕЖЕДНЕВНО С 10.00 ДО 21.00</span>
            </li>
          </ul>
        </section>

        {/* Условия доставки */}
        <section className="delivery-section">
          <h3 className="section-title">УСЛОВИЯ ДОСТАВКИ:</h3>
          <ul className="delivery-list">
            <li>
              ДОСТАВКА ОСУЩЕСТВЛЯЕТСЯ ПО ГОРОДУ МИНСКУ В ПРЕДЕЛАХ МКАД <span className="mint-text">В ЛЮБОЙ ДЕНЬ</span>
            </li>
            <li>
              ВОЗМОЖНОСТЬ, СРОКИ И СТОИМОСТЬ ДОСТАВКИ ЗА ПРЕДЕЛЫ МКАД, ДОСТАВКИ В НОЧНОЕ ВРЕМЯ,
              ПРАЗДНИКИ <span className="mint-text">ОГОВАРИВАЮТСЯ С МЕНЕДЖЕРОМ</span>
            </li>
          </ul>
        </section>

        {/* Дополнительно (Полупрозрачная плашка) */}
        <section className="delivery-section additional-box">
          <h3 className="section-title">ДОПОЛНИТЕЛЬНО:</h3>
          <p className="additional-text">
            Доставка иному лицу возможна только в случае оплаты заказа заказчиком. Доставка осуществляется не ранее
            чем через 2 часа после оплаты заказа, но может быть ранее, если букет есть в наличии либо по договоренности
            с менеджером.
          </p>
          <p className="additional-text">Время ожидания курьера составляет 15 минут.</p>
          <p className="additional-text">
            В случае если на момент доставки цветов получателя нет либо нет возможности по иным причинам произвести
            доставку (указан неточный адрес, закрытая входная дверь, контрольно-пропускная система и др.), мы оставляем
            за собой право по собственному выбору:
          </p>
          <ul className="additional-sublist">
            <li>оставить цветы тому, кто открыл дверь;</li>
            <li>с заказчиком согласовать повторную доставку, которая дополнительно оплачивается;</li>
            <li>отказаться от передачи цветов без возврата денежных средств.</li>
          </ul>

          <p className="contact-help-text">
            Если вы либо иной получатель не получили заказ, вам необходимо сообщить об этом менеджеру по телефону{' '}
            <a href="tel:+375291136969" className="mint-link">+375 29 113 69 69</a>.
          </p>
        </section>

        {/* Возврат денег */}
        <section className="delivery-section">
          <h3 className="section-title">ВОЗВРАТ ДЕНЕГ:</h3>
          <p className="additional-text">
            При отказе заказчика от заказа в течение двух часов, если заказ ещё не начал готовиться, средства
            возвращаются в полном объёме. Если же флорист начал подготовку, то заказчик имеет право на возврат 50%
            стоимости, либо, если ещё не был оплачен, то обязан оплатить 50%.
          </p>
          <p className="additional-text">
            Цветы надлежащего качества возврату и обмену не подлежат, а если имеются какие-либо недостатки в цветах –
            возврат производится лишь если эти недостатки не являются природными и естественными изъянами растения.
            Возврат денежных средств производится незамедлительно на тот счёт, с которого произошла оплата, их же
            поступление на счёт зависит от платёжной системы.
          </p>
        </section>

        {/* Водяной знак Lover Flower */}
        <div className="delivery-watermark">Lover Flower</div>
      </div>
    </div>
  )
}

export default Delivery