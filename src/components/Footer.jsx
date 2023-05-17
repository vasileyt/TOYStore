import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
            <div className='col mb-2'><p>
                  Игрушки
                </p>
                  <a className=''>
                      <img src='img/ikon11.png' className='bi me-2' width={180} height={180}>
                      </img>
                  </a>
                  
                
</div>
                      <div className='col mb-3'>

                      </div>
                    <div className='col mb-4'>
                        <h5>Связь с нами</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> +79000000000</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Mail@mail.ru</a>
                          </li>
                        </ul>
                    </div>

                    <div className='col mb-4'>
                        <h5>Наш адрес</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> г. Москва, ул. Зеленая 34/2</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> г. Санкт-Петербург, ул. Болотная 2/3</a>
                          </li>
                        </ul>
                    </div>
          
        </footer>
    </div>
  )
}

export default Footer