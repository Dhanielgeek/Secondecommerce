import React,{useState,useEffect} from 'react'
import '../Components/Style.css'
import { useParams } from 'react-router-dom'


const Detail = () => {

  const [Details, setDetails] = useState({})
  const {id} = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setDetails(json))
  }, [])
  


  return (
    <div className='Detail'>
      <div className="detailCard">
        <img src={Details.image} alt="" />
        <span>
          {Details.title}
        </span>
        <p>
          {Details.price}
        </p>
        <p>
          {Details.description}
        </p>
      </div>
    </div>
  )
}

export default Detail