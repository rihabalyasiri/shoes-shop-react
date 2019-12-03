import React from 'react';
import myData from '../myData'


const Info = () => {
    
    let myDataArray; 
    myDataArray = myData.map(element => 
        <div>
            <h1>{element.name}</h1>
            <h2>{element.age}</h2>
            <h3>{element.job}</h3>
        </div>
)
    return (<div>{ myDataArray }</div>);
}

export default Info;