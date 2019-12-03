import React from 'react';
import Artikel from './Artikel';
import shopData from '../shopData'

const Shop = () => {
    let shopArray;
    shopArray = shopData.map(element => <Artikel key={element.id} imgSrc={element.imgUrl} name={element.name } price={element.price}/>)
    return ( <div className="shop">
        {shopArray}
    </div> );
}
 
export default Shop;