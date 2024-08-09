import React from 'react'
import './newcollection.css'
import new_collection from "../../Assets (1)/Assets/new_collections"
import Item from '../item/Item'

const NewCollection = () => {
    return (
        <>
        <div className="new-collections">
        <h1>New Collection</h1>
        <div className="collections">
        {
            new_collection.map((item) => {
                return <Item name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
        )
        }
        </div>
        </div>
        </>
    )
}
export default NewCollection