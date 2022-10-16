import React from 'react'
import Footer from './footer'

export default function Mobile() {
    return (
        <>
            <div className='mobile-page'>
                <div className='main-img-two'>
                    {/* <img src="/images/mobile-big-img.jpg" className='slider-img-two' alt="" /> */}
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/images/m-1.jpg" class="d-block w-100 mw" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/m-2.jpg" class="d-block w-100 mw" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/mobile-one.jpg" class="d-block w-100 mw" alt="..."/>
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
            {/* -----------------------------iphone------------------------------------- */}
            <div className='three-boxes-bar'>
                <div className="main-mobile-heading">
                    <h1 className='I-Phone'>Apple</h1>
                </div>
                <div className='boxes'>
                    <div className='box'>
                        <div className='iphone-first-box-one'></div>
                        <div className='product-price'>
                            <p className='box-para'>Iphone 12 Pro</p>
                            <h3 className='box-head-three'>$1265</h3>
                            <button className='cart-btn'>ADD TO CART</button>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='iphone-first-box-two'></div>
                        <div className='product-price'>
                            <p className='box-para'>Iphone 13 Pro</p>
                            <h3 className='box-head-three'>$1890.00</h3>
                            <button className='cart-btn'>ADD TO CART</button>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='iphone-first-box-three'></div>
                        <div className='product-price'>
                            <p className='box-para'>Iphone 14 Pro</p>
                            <h3 className='box-head-three'>$2500.00</h3>
                            <button className='cart-btn'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------realme--------------------------------- */}
            <div className='three-boxes-bar'>
                <div className="main-mobile-heading">
                    <h1 className='I-Phone'>Realme</h1>
                </div>
                <div className='boxes'>
                    <div className='box'>
                        <div className='realme-first-box-one'></div>
                        <div className='product-price'>
                            <p className='box-para'>Realme 10 Pro</p>
                            <h3 className='box-head-three'>$255.00</h3>
                            <button className='cart-btn'>ADD TO CART</button>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='realme-first-box-two'></div>
                        <div className='product-price'>
                            <p className='box-para'>Raelme 11 Pro</p>
                            <h3 className='box-head-three'>$300.00</h3>
                            <button className='cart-btn'>ADD TO CART</button>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='realme-first-box-three'></div>
                        <div className='product-price'>
                            <p className='box-para'>Realme 12 Pro</p>
                            <h3 className='box-head-three'>$350.00</h3>
                            <button className='cart-btn'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------------------------vivo-----------------------------     */}
            <div className='three-boxes-bar'>
                <div className="main-mobile-heading">
                    <h1 className='I-Phone'>Vivo</h1>
                </div>
                <div className='boxes'>
                    <div className='box'>
                        <div className='vivo-first-box-one'></div>
                        <div className='product-price'>
                            <p className='box-para'>Vivo 10 Pro</p>
                            <h3 className='box-head-three'>$275.00</h3>
                            <button className='cart-btn'>ADD TO CART</button>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='vivo-first-box-two'></div>
                        <div className='product-price'>
                            <p className='box-para'>Vivo 11 Pro</p>
                            <h3 className='box-head-three'>$325.00</h3>
                            <button className='cart-btn'>ADD TO CART</button>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='vivo-first-box-three'></div>
                        <div className='product-price'>
                            <p className='box-para'>Vivo 12 Pro</p>
                            <h3 className='box-head-three'>$400.00</h3>
                            <button className='cart-btn'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------------------mi--------------------------- */}
            <div className='three-boxes-bar'>
                <div className="main-mobile-heading">
                    <h1 className='I-Phone'>Mi</h1>
                </div>
                <div className='boxes'>
                    <div className='box'>
                        <div className='mi-first-box-one'></div>
                        <div className='product-price'>
                            <p className='box-para'>Redmi 10 pro</p>
                            <h3 className='box-head-three'>$250.00</h3>
                            <button className='cart-btn'>ADD TO CART</button>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='mi-first-box-two'></div>
                        <div className='product-price'>
                            <p className='box-para'>Redmi 11 pro</p>
                            <h3 className='box-head-three'>$320.00</h3>
                            <button className='cart-btn'>ADD TO CART</button>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='mi-first-box-three'></div>
                        <div className='product-price'>
                            <p className='box-para'>Redmi 12 Pro</p>
                            <h3 className='box-head-three'>$400.00</h3>
                            <button className='cart-btn'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='footer-ft'>
                <Footer/>
            </div>
        </>
    )
}
