import React from 'react'
import Footer from './footer'

export default function About() {
  return (
    <>
      <div className='main-about-page'>
        <div className='about-page'>
          <div className='about-div-one'>
            <h2 className='first-about-heading-two'>
              Visit Online Store for Most Demanding &#38;<br />
              Best Selling Electronic Brands At Heaven's Electronics.
            </h2>
            <p className='about-para-one'>
              HP | Eureka Forbes | IFB | Godrej | Haier | Whirlpool | Sony | LG | Lenovo | Apple | Samsung | Boat
            </p>
          </div>
          <div className='about-div-two'>
            <h2 className='second-about-heading-two'>
              Locate Heavens's Electronics Showroom Near You &#38;<br />
              Get Best In-Store Deals
            </h2>
            <div className='about-search-bar'>
              <nav class="navbar ">
                <div class="container-fluid">
                  <a class="navbar-brand">Heaven's</a>
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success abt-btn-srch" type="submit">Search</button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
          <div className='about-div-three'>
            <div className='abt-head-three'>
              <h2 className='third-about-heading-two'>
                Locate Heaven's Electronics Showroom<br />
                Near You by Category
              </h2>
            </div>
            <div className='main-abt-ul-li-bar'>
              <div className='about-ul-li-one'>
                <ul className='about-first-ul-li'>
                  <li className='abt-li'>Air Conditioners Store Near Me</li>
                  <li className='abt-li'>Laptops Store Near Me</li>
                  <li className='abt-li'>Television Store Near Me</li>
                </ul>
              </div>
              <div className='about-ul-li-two'>
                <ul className='about-second-ul-li'>
                  <li className='abt-li'>Cameras Store Near Me</li>
                  <li className='abt-li'>Mobiles Store Store Near Me</li>
                  {/* <li className='abt-li'></li> */}
                </ul>
              </div>
              <div className='about-ul-li-three'>
                <ul className='about-third-ul-li'>
                  <li className='abt-li'>Refrigerator Store Near Me</li>
                  <li className='abt-li'>Washing Machines Store Near Me</li>
                  <li className='abt-li'>Headphones Store Near Me</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer ft'>
          <Footer/>
        </div>
      </div>
    </>
  )
}
