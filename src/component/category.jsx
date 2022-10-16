import React from 'react'
import { Link } from 'react-router-dom'

export default function Category() {
  return (
    <div>
      <div className='home-page-one'>
        <div className='ctgrs'>
          <h1 className='home-heading-one'>Categories</h1>
        </div>
        <div className='ctgrs-part'>
          <h4 className='home-heading-four'><Link to="/mobile" className='cg'>Mobile</Link></h4>
          <h4 className='home-heading-four'><Link to="/mobile.jsx" className='cg'>Laptop</Link></h4>
          <h4 className='home-heading-four'><Link to="/mobile.jsx" className='cg'>Home-Theater</Link></h4>
          <h4 className='home-heading-four'><Link to="/mobile.jsx" className='cg'>Smart-TV</Link></h4>
          <h4 className='home-heading-four'><Link to="/mobile.jsx" className='cg'>Air Conditioner</Link></h4>
          <h4 className='home-heading-four'><Link to="/mobile.jsx" className='cg'>Head-Phones</Link></h4>
          <h4 className='home-heading-four'><Link to="/mobile.jsx" className='cg'>Camera</Link></h4>
        </div> 
      </div>
    </div>
  )
}
