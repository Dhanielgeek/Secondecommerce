import React, { useEffect,useState } from 'react'
import '../Components/Style.css'
import { Link } from 'react-router-dom'


const Category = () => {

  const [categories, setcategories] = useState([])
  const [Showcat, setShowcat] = useState(false)
  const [Products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((json)=> setProducts(json))
  },[])


  const Fetchcat = (e)=>{
    fetch(`https://fakestoreapi.com/products/category/${e}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
            setShowcat(true)
    console.log(e)
  }

  

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=> setcategories(json))
  },[])






  return (
    <div className='category'>
      <div className='CardCat'>
        {
      Showcat == false ? categories.map((e)=>(
            <div className='eachcat' onClick={()=>setShowcat(Fetchcat(e))} key={e}>
          <h2>
            {e}
          </h2>
        </div>
          )) :    
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
        {Showcat  && <button onClick={()=>setShowcat(false)} style={{background:'black'}}>Back</button>}
      </div>
    </div>
  )
}

export default Category