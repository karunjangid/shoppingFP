import React from 'react'
import './popular.css'
import data_product from '../../Assets (1)/Assets/data'
import Item from '../item/Item'

const Popular = () => {
  return (
    <>
    <div className="popular">
      <h1>Popular in women</h1>
      <div className="popular-item">
        {
          data_product.map((item)=>{
            return <Item name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}  />
          })
        }
      </div>
    </div>
    </>
  )
}

export default Popular