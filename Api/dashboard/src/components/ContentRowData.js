import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let productsTotal = {
    title: 'Products in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let usersTotal = {
    title:' Users in DataBase', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [productsTotal, usersTotal, actorsQuantity];

function ContentRowData({props}){



    return (
    
        <div className="row">
            
            {cartProps.map( (data, i) => {

                return <SmallCard {...data} key={i} props={props}/>
            
            })}

        </div>
    )
}

export default ContentRowData;