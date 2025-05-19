
  import  { useEffect, useState } from 'react';
  import axios from 'axios';

  function Card() {
      const [categories, setCategories] = useState([]);

      useEffect(() => {
          const fetchCategories = async () => {
              const response = await axios.get('http://localhost:5000/api/foodData');
              setCategories(response.data);
              console.log(response.data);
          };

          fetchCategories();
      }, []);

      return (
          <div className='container my-5'>
              <h1 className='text-center my-4'>Food Categories</h1>
              <div className='row'>
                  {categories.map(category => (<>
                  <div className='card m-2 p-2'   style={{ width: "18rem" }}>
                        {/* <li key={category._id}>{category.categoryName}</li> */}
                      <h4 className='text-center'>{category.name}</h4>
                     <img src={category.img} className="rounded" style={{height:'260px'}}/>
                     <select className='m-2 text-white bg-success rounded'>
                        {
                            Array.from(Array(6),(e,i)=>{
                                return (
                                    <option key={i+1} value={i+1}>{i+1}</option>
                                )}
                            )
                        }
                     </select>
                     {/* <select
                className=" m-2 h-100 bg-success rounded"
                aria-label="Default select example"
              >
               <option value="half">{category.options}</option> */}
               {/* <option value="full">full</option> */}
              {/* </select> */}

                      <p className="mt-3">{category.description}</p>
                   
                  </div>
 
                  </>
                     
                  ))}
            </div>
          </div>
      );
  }

  export default Card;
  