import React from 'react'
import Footer from './footer'
import Category from './category'

export default function Home() {
  return (
    <>
      <div>
        <div className='main-home-page'>
          <div className='home-pg-left'>
            <Category />
          </div>

          <div className='home-pg-right'>
            <div className='main-img-first'>
              {/* <img src="/images/third.jpg" className='slider-img-one' alt="" /> */}
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/images/one.jpg" class="d-block w-100 hw" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="/images/two.jpg" class="d-block w-100 hw" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="/images/three.jpg" class="d-block w-100 hw" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="/images/four.jpg" class="d-block w-100 hw" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="/images/home-theater-one.jpg" class="d-block w-100 hw" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="/images/Refrigerator-one.jpg" class="d-block w-100 hw" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="/images/ac-two.jfif" class="d-block w-100 hw" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='six-box-bar'>
          <div className='three-boxes-bar'>
            <div className='boxes'>
              <div className='box'>
                <div className='first-box-one'></div>
                <div className='product-price'>
                  <p className='box-para'>Digital Camera</p>
                  <h3 className='box-head-three'>$2000.00</h3>
                  <button className='cart-btn'>ADD TO CART</button>
                </div>
              </div>
              <div className='box'>
                <div className='first-box-two'></div>
                <div className='product-price'>
                  <p className='box-para'>15 Inch Laptop</p>
                  <h3 className='box-head-three'>$1265.00</h3>
                  <button className='cart-btn'>ADD TO CART</button>
                </div>
              </div>
              <div className='box'>
                <div className='first-box-three'></div>
                <div className='product-price'>
                  <p className='box-para'>Smart Phone</p>
                  <h3 className='box-head-three'>$500.00</h3>
                  <button className='cart-btn'>ADD TO CART</button>
                </div>
              </div>
              <div className='box'>
                <div className='first-box-four'></div>
                <div className='product-price'>
                  <p className='box-para'>Head Phone</p>
                  <h3 className='box-head-three'>$65.00</h3>
                  <button className='cart-btn'>ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
          <div className='three-boxes-bar'>
            <div className='boxes'>
              <div className='box'>
                <div className='second-box-one'></div>
                <div className='product-price'>
                  <p className='box-para'>Air Conditioner</p>
                  <h3 className='box-head-three'>$1500.00</h3>
                  <button className='cart-btn'>ADD TO CART</button>
                </div>
              </div>
              <div className='box'>
                <div className='second-box-two'></div>
                <div className='product-price'>
                  <p className='box-para'>42 Inch Smart LED</p>
                  <h3 className='box-head-three'>$1260.00</h3>
                  <button className='cart-btn'>ADD TO CART</button>
                </div>
              </div>
              <div className='box'>
                <div className='second-box-three'></div>
                <div className='product-price'>
                  <p className='box-para'>Refrigerator</p>
                  <h3 className='box-head-three'>$2531.00</h3>
                  <button className='cart-btn'>ADD TO CART</button>
                </div>
              </div>
              <div className='box'>
                <div className='second-box-four'></div>
                <div className='product-price'>
                  <p className='box-para'>Home-Theater</p>
                  <h3 className='box-head-three'>$750.00</h3>
                  <button className='cart-btn'>ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-ft'>
          <Footer />
        </div>

      </div>
    </>
  )
}
