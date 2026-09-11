import React from 'react'
import logo from '../assets/logo.png' // Путь к твоему логотипу

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Колонка 1: Логотип и Реквизиты */}
        <div className="footer-col footer-info">
          <div className="footer-logo">
            <img src={logo} alt="Lover Flower" />
          </div>
          <h4 className="footer-title">РЕКВИЗИТЫ</h4>
          <p className="footer-text">
            ООО «ЛОВЕФЛОВЕ» 220035, РЕСПУБЛИКА БЕЛАРУСЬ, Г. МИНСК, УЛ. ТИМИРЯЗЕВА Д. 67, КОМН. 112 (ПОМ.11) УНП 193263781, Р/С BY55MTBK30120001093300096372 ЗАО «МТБАНК», БИК MTBKBY22 220007, Г. МИНСК, УЛИЦА ТОЛСТОГО
          </p>
        </div>

        {/* Колонка 2: Каталог */}
        <div className="footer-col">
          <h4 className="footer-title">КАТАЛОГ</h4>
          <ul className="footer-menu">
            <li><a href="#popular">ПОПУЛЯРНОЕ</a></li>
            <li><a href="#dried">СУХОЦВЕТЫ</a></li>
            <li><a href="#roses">БУКЕТЫ РОЗ</a></li>
            <li><a href="#compositions">КОМПОЗИЦИИ ИЗ ЦВЕТОВ</a></li>
            <li><a href="#custom">ИНДИВИДУАЛЬНЫЙ БУКЕТ</a></li>
            <li><a href="#holiday">БУКЕТ НА ПРАЗДНИК</a></li>
            <li><a href="#wrapping">УПАКОВКА ПОДАРКОВ</a></li>
            <li><a href="#balloons">ШАРЫ</a></li>
            <li><a href="#cards">ОТКРЫТКИ</a></li>
            <li><a href="#envelopes">КОНВЕРТЫ</a></li>
          </ul>
        </div>

        {/* Колонка 3: Букет */}
        <div className="footer-col">
          <h4 className="footer-title">БУКЕТ</h4>
          <ul className="footer-menu">
            <li><a href="#for-girl">ДЛЯ ДЕВУШКИ</a></li>
            <li><a href="#for-man">ДЛЯ МУЖЧИНЫ</a></li>
            <li><a href="#for-wife">ДЛЯ ЖЕНЫ</a></li>
            <li><a href="#for-mom">ДЛЯ МАМЫ</a></li>
            <li><a href="#for-colleague">ДЛЯ КОЛЛЕГИ</a></li>
            <li><a href="#for-boss">ДЛЯ НАЧАЛЬНИКА</a></li>
            <li><a href="#for-daughter">ДЛЯ ДОЧКИ</a></li>
            <li><a href="#for-kids">ДЛЯ ДЕТЕЙ</a></li>
            <li><a href="#for-woman">ДЛЯ ЖЕНЩИНЫ</a></li>
          </ul>
        </div>

        {/* Колонка 4: Навигация */}
        <div className="footer-col footer-nav-col">
          <ul className="footer-main-links">
            <li><a href="#delivery">ДОСТАВКА И ОПЛАТА</a></li>
            <li><a href="#about">О НАС</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contacts">КОНТАКТЫ</a></li>
            <li><a href="#corporate">ДЛЯ КОРПОРАТИВНЫХ КЛИЕНТОВ</a></li>
          </ul>
        </div>

        {/* Колонка 5: Контакты и Соцсети */}
        <div className="footer-col footer-contacts-col">
          <div className="footer-contact-block">
            <a href="mailto:ZAKAZ@LOVERFLOWER.BY" className="footer-contact-highlight">
              ZAKAZ@LOVERFLOWER.BY
            </a>
            <span className="footer-subtext">ДОСТАВКА 24/7 ПО ДОГОВОРЕННОСТИ С ОПЕРАТОРОМ</span>
          </div>

          <div className="footer-contact-block">
            <div className="footer-contact-highlight">УЛ. ТИМИРЯЗЕВА 67</div>
            <span className="footer-subtext">10:00 ДО 21:00<br />БЕЗ ВЫХОДНЫХ</span>
          </div>

          <div className="footer-contact-block">
            <a href="tel:+375291136969" className="footer-contact-highlight">
              +375 (29) 113-69-69
            </a>
            <span className="footer-subtext">ПРИЕМ ЗВОНКОВ КРУГЛОСУТОЧНО</span>
          </div>

          {/* Иконки соцсетей */}
          <div className="footer-socials">
            <a href="#instagram" aria-label="Instagram" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#whatsapp" aria-label="WhatsApp" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
            <a href="#viber" aria-label="Viber" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.39 0c-5.22 0-10.37 3.32-10.37 9.84 0 3.73 2.04 6.84 5.25 8.44l-.62 3.04c-.08.38.27.7.63.55l3.52-1.52c.52.09 1.06.14 1.6.14 6.94 0 11.6-4.7 11.6-10.61C23 3.63 17.57 0 11.39 0zm.01 18.52c-.52 0-1.03-.05-1.53-.15l-2.39 1.03.43-2.07c-2.73-1.32-4.48-3.91-4.48-6.93 0-5.32 4.25-8.08 8.52-8.08 5.12 0 9.3 2.92 9.3 8.16 0 5.03-3.82 8.04-9.85 8.04z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer