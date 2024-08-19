import axios from 'axios'

import './App.css'
import { useEffect, useState } from 'react'


export default function Test() {

const[data,setData] = useState([])

  useEffect(() => {
        axios.get('https://dummyjson.com/products?sortBy=title&order=asc')
        .then(response =>{
          setData(response.data.products);
        })
        .catch(error =>{
          console.log('lỗi',error);
        })
  
  },[])
  return (
  
    <div>

      <h3>product list</h3>
      {
        data.map((item) => (
          <div key = {item.id}>
          <h5>id :{item.title}</h5>
          <p>price :{item.price}</p>
        </div>
        
        )
        

        )

      }


    </div> 
  )
}

