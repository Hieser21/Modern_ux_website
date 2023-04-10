import React from 'react'
import './blog.css'
const Pricing = () => {
  return (
    <div id='pricing' className="carousel carousel-center rounded-box">
      <div className='carousel-item'>
      <div className="card w-96 bg-purple-900 text-white shadow-xl">
      <div className="card-body">
      <h2 className="card-title text-center">Instep Lite</h2>
      <p className='text-center align-self-center'>Coming Soon</p>
     <div className="card-actions justify-end">
      <button className="btn btn-primary btn-disabled">Buy Now</button>
      </div>
      </div>
    </div>
    <div className='carousel-item'>
      <div className="card w-96 text-white shadow-xl">
      <div className="card-body">
      <h2 className="card-title text-center">Instep Pro</h2>
      <p className='text-center'>$25/ 6 months or $3.99/month</p>
      <p className='text-center'>Anti Injection</p>
      <p className='text-center'>CoreGUI Protection</p>
     <p className='text-center'>Anti save instance</p>
     <p className='text-center'>Anti hook metamethod</p>
     <p className='text-center'>...And many more</p>
     <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
    
  </div>
</div>
      </div>
  </div>
  </div>
)
}

export default Pricing
