import React from 'react'
import Burger from '../assets/Food/burger.jpg'
const Card = () => {
  return (
    <>
     
        <div
          className="card mt-3"
          style={{ width: "18rem" }}
        >
          <img src={Burger} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text .</p>
            <div className="container ">
              <select
                className=" m-2 h-100 bg-success"
                aria-label="Default select example"
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select
                className=" m-2 h-100 bg-success rounded"
                aria-label="Default select example"
              >
               <option value="half">Half</option>
               <option value="full">full</option>
              </select>

              <div className="d-inline fs-5">
                Total Price
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Card
