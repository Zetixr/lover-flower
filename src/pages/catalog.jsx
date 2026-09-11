import React from 'react'

const Catalog = () => {
  return (
    <section className="catalog-section">
      <div className="catalog-container">
        
        {/* Шапка каталога */}
        <div className="catalog-header">
          <h2 className="catalog-title">КАТАЛОГ</h2>
          <p className="catalog-description">
            У нас самый большой выбор цветов, букетов, открыток и подарков.<br />
            Мы всегда поможем вам подобрать букет для вашего события, наш<br />
            менеджер вас проконсультирует и поможет определиться с выбором
          </p>
          <p className="catalog-subtitle">Ознакомьтесь с нашими разделами каталога</p>
        </div>

        {/* Сетка с карточками */}
        <div className="catalog-grid">
          
          {/* Карточка 1: ЦВЕТЫ */}
          <div className="catalog-card card-flowers">
            <span className="watermark watermark-left">ЦВЕТЫ</span>
            <div className="card-content">
              <h3 className="card-title">ЦВЕТЫ</h3>
              <ul className="card-list">
                <li>СБОРНЫЕ БУКЕТЫ</li>
                <li>МОНОБУКЕТЫ</li>
                <li>КОМПОЗИЦИИ ИЗ ЦВЕТОВ</li>
                <li>РОЗЫ</li>
                <li>СВАДЕБНЫЕ</li>
              </ul>
              <a href="#catalog" className="card-link">СМОТРЕТЬ КАТАЛОГ</a>
            </div>
          </div>

          {/* Карточка 2: СУХОЦВЕТЫ */}
          <div className="catalog-card card-dried">
            <span className="watermark watermark-right">БУКЕТЫ</span>
            <div className="card-content">
              <h3 className="card-title">ГОТОВЫЕ БУКЕТЫ<br />ИЗ СУХОЦВЕТОВ</h3>
              <ul className="card-list">
                <li>БУКЕТЫ</li>
                <li>ДЛЯ ИНТЕРЬЕРА</li>
                <li>КОМПОЗИЦИИ</li>
              </ul>
              <a href="#catalog" className="card-link">СМОТРЕТЬ КАТАЛОГ</a>
            </div>
          </div>

          {/* Карточка 3: ДОПОЛНИТЕЛЬНО */}
          <div className="catalog-card card-extra">
            <span className="watermark watermark-bottom">ДОПОЛНИТЕЛЬНО</span>
            <div className="card-content">
              <h3 className="card-title">ДОПОЛНИТЕЛЬНО</h3>
              <ul className="card-list">
                <li>ШАРЫ</li>
                <li>ИГРУШКИ</li>
                <li>ОТКРЫТКИ</li>
                <li>УПАКОВКА</li>
              </ul>
              <a href="#catalog" className="card-link">СМОТРЕТЬ КАТАЛОГ</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Catalog