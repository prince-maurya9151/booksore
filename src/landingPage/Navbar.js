import React from 'react';
function Navebar() {
  return (
    <div className='Nav'> 
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Home</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="navbar-brand" href="/home">Home</a>
        </li>
       




        <li class="nav-item">
         <a class="navbar-brand" href="/About">About</a>
         
        </li>
         <li class="nav-item">
         <a class="navbar-brand" href="/SignUp">SignUp</a>
         
        </li> <li class="nav-item">
         <a class="navbar-brand" href="/buyBook">Feature</a>
         
        </li>
        <li class="nav-item dropdown">
          <a class="nav-brand dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            City
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Lucknow</a></li>
            <li><a class="dropdown-item" href="#">Delhi</a></li>
            <li><a class="dropdown-item" href="#">Banglore</a></li>
            <li><a class="dropdown-item" href="#">Prayagraj</a></li>
           
          </ul>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
export default Navebar;