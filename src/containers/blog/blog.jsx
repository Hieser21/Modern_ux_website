import React from 'react'
import './blog.css'
const Pricing = () => {
  return (
    <div id='pricing' className="carousel carousel-center rounded-box">
      <div className='carousel-item'>
      <div className="card w-96 bg-purple-900 text-white shadow-xl">
      <div className="card-body">
      <h2 className="card-title text-center">Monthly</h2>
      <p className='text-center'>$10/Monthly</p>
      <p className='text-center'>Lorem Ipsum</p>
      <p className='text-center'>Sit dolor</p>
     <p className='text-center'>Amet solot</p>
     <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
      </div>
      </div>
    </div>
    <div className='carousel-item'>
      <div className="card w-96 bg-purple-900 text-white shadow-xl">
      <div className="card-body">
      <h2 className="card-title text-center">Lifetime</h2>
      <p className='text-center'>$250</p>
      <p className='text-center'>Lorem Ipsum</p>
      <p className='text-center'>Sit dolor</p>
     <p className='text-center'>Amet solot</p>
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
