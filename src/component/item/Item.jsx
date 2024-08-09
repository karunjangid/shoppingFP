import React from 'react'
import './item.css'

const Item = ({id,image,name,new_price,old_price,onAddToCart}) => {
  return (
    <>
    <img src={image} alt="ProImg" />
    <p>{name}</p>
    <div className="func">
      <div className="item-prices">
        <div className="item-price-new">
          ${new_price}
        </div>
        <div className="item-price-old">
          ${old_price}
        </div>
      </div>
    </div>
    </>
  )
}

export default Item