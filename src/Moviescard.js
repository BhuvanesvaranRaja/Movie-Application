import React from 'react'
import "./Moviescard.css"

export default function Moviescard({movie}) {
    let {name,genre,imdb_rating,duration,img_link}=movie || { };
  return (
    <div className='Card-container'>
        <div className='Card-img-container'>
            <img className='card-img' src={img_link} alt='invalid'></img>
        </div>
        <div className='card-details'>
        <div>
            <span className='title'>{name}</span>
        </div>
        <div>
            <span className='genre'><span className='innertags'>Genre :</span> {genre}</span>
        </div>
        <div className='runtime'>
            <span><span className='innertags'>Runtime :</span>{duration} mins</span><br/>
            <span><span className='innertags'>Rating :</span> {imdb_rating}</span>

        </div>
        </div>
        
      
    </div>
  )
}
