import React from 'react';
import "./home.css"
function Hero() {
  return (
   <div className='container'>
    <div className='row'>
    
   
        <h1 className='feature'>Our Features</h1>

    

<div class="row row-cols-1 row-cols-md-2 g-4" >
  <div class="col">
    <div class="card"  style={{  width: "300px" }}>
      <img src="media/buybook.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> <a href='/buyBook'>Buy Books</a></h5>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{ width: "300px" }}>
      <img src="media/rent.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> <a href='/rent'>Rent books</a> </h5>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{ width: "300px" }}>
      <img src="media/resell.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><a href='#'>Resell Your Books</a></h5>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{  width: "300px" }}>
      <img src="media/donate.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><a href='#'>Donate books</a></h5>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
</div>
    </div>

   </div>
  )
}
export default Hero;