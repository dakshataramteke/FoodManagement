import burger from '../assets/Food/burger4.jpg';
import momos from '../assets/Food/momos.jpg';
import pizza from '../assets/Food/pizza.jpg'
import '../App.css';

const Carousel = () => {
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img src={burger} className="d-block w-100" alt="..." style={{filter:"brightness(60%)"}}/>
     
 <div className='d-flex justify-content-center carousel-caption d-none d-md-block'>
 <form className="d-flex" style={{zIndex:'10'}}>
      <input className="form-control me-2 w-100 bg-transparent" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-success" type="submit">Search</button>
    </form>
 </div>
    </div>
    <div className="carousel-item">
      <img src={momos} className="d-block w-100" alt="..." style={{filter:'brightness(60%)'}}/>
      <div className='d-flex justify-content-center carousel-caption d-none d-md-block'>
 <form className="d-flex" style={{zIndex:'10'}}>
      <input className="form-control me-2 w-100 bg-transparent" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-success" type="submit">Search</button>
    </form>
 </div>
    </div>
    <div className="carousel-item">
      <img src={pizza} className="d-block w-100" alt="..." style={{filter:'brightness(60%)'}}/>
     <div className='d-flex justify-content-center carousel-caption d-none d-md-block'>
 <form className="d-flex" style={{zIndex:'10'}}>
      <input className="form-control me-2 w-100 bg-transparent" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-success" type="submit">Search</button>
    </form>
 </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carousel
