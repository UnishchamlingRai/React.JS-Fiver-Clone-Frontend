import React from 'react'
import { Link } from 'react-router-dom'
import './catCard.scss'


const CatCard = (props) => {
  const{title,desc,img}=props;
  return (
    <Link to='/gig?cat=design'>
    <div className='catCard'>
      <img src={img} alt="" />
      <span className='desc'>{desc}</span>
      <span className='title'>{title}</span>
    </div>
    </Link>

  )
}

export default CatCard
