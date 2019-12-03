import React from 'react';

const Artikel = (props) => {

    return (<div className='artikel' key={props.key}>
        <figure>
            <img className='article-img' src={props.imgSrc} alt="" />
        </figure>
        <figcaption>
            <h2>{props.name}</h2>
            <h4>{props.price} €</h4>
        </figcaption>
    </div>);
}

export default Artikel;