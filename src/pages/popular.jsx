import React from 'react'
import bouquetBg from '../assets/bouquetBg.png'
import bouquetOne from '../assets/bouquetOne.png'
import bouquetTwo from '../assets/bouquetTwo.png'
import bouquetThree from '../assets/bouquetThree.png'

const Popular = () => {
  const products = [
    {
      id: 1,
      title: 'ЛУЧШИЙ ДЕНЬ',
      price: '167.000 ₽',
      oldPrice: null,
      badge: 'NEW',
      badgeClass: 'badge-new',
      img: bouquetOne,
    },
    {
      id: 2,
      title: 'ЛУЧШИЙ ДЕНЬ',
      price: '167.000 ₽',
      oldPrice: null,
      badge: null,
      badgeClass: '',
      img: bouquetTwo,
    },
    {
      id: 3,
      title: 'ЛУЧШИЙ ДЕНЬ',
      price: '167.000 ₽',
      oldPrice: '187.000 ₽',
      badge: 'SALE',
      badgeClass: 'badge-sale',
      img: bouquetThree,
    },
  ]

  return (
    <section className="popular-section">
      {/* Фоновое текстурное изображение справа */}
      <img src={bouquetBg} alt="" className="popular-bg-img" />

      <div className="popular-container">
        {/* Заголовок */}
        <div className="popular-header">
          <h2 className="popular-title">
            ПОПУЛЯРНЫЕ <br /> БУКЕТЫ
          </h2>
          <p className="popular-subtitle">Самые любимые композиции наших клиентов</p>
        </div>

        {/* Слайдер / Сетка товаров */}
        <div className="popular-slider-wrapper">
          {/* Стрелка влево */}
          <button className="slider-arrow arrow-left" aria-label="Previous">
            <span></span>
          </button>

          <div className="popular-grid">
            {products.map((item) => (
              <div key={item.id} className="product-card">
                <div className="product-img-wrapper">
                  <img src={item.img} alt={item.title} className="product-img" />
                  {item.badge && (
                    <span className={`product-badge ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>
                  <div className="product-price-block">
                    <span className="product-price">{item.price}</span>
                    {item.oldPrice && (
                      <span className="product-old-price">{item.oldPrice}</span>
                    )}
                  </div>
                  <button className="add-to-cart-btn">В КОРЗИНУ</button>
                </div>
              </div>
            ))}
          </div>

          {/* Стрелка вправо */}
          <button className="slider-arrow arrow-right" aria-label="Next">
            <span></span>
          </button>
        </div>

        {/* Ссылка внизу */}
        <div className="popular-footer">
          <a href="#catalog" className="see-all-link">
            СМОТРЕТЬ ВЕСЬ КАТАЛОГ <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Popular