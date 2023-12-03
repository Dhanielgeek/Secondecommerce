import React,{useState,useEffect} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'



const Body = () => {


    const [Products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((json)=> setProducts(json))
  },[])

  return (
    <div className='main'>
        {
      Products.map((props)=>(
        <Link to={`/detail/${props.id}`} className='ProductCard' key={props.id}>
      <img src={props.image} alt="" />
     <section className='content'>
     <h3>
        {props.title}
      </h3>
      <p>
         ₦ {props.price}
      </p>
     </section>
     </Link>
      ))
     }
    </div>
  )
}

export default Body