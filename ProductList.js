import React from 'react'
import { Link } from 'react-router-dom'


const ProductList = ({ EventId, ImageURL, EventName, Date, Seats_availabilty }) => {

    return (

        <>
            <div className="product">
                <div className="leftPro">
                    <figure>
                        <img src={ImageURL} alt={EventName} />
                    </figure>
                </div>
                <div className="rightPro">
                    <div>
                        <h1>{EventName}</h1>
                        <h2>Date: {Date}</h2>
                        <h3>Seats Avaliable: {Seats_availabilty}</h3>
                    </div>
                    {Seats_availabilty > 0 ?
                        <Link to={`/${EventName}`} className="btn">Book Now</Link>
                        : <button>Sold Out</button>
                    }
                </div>
            </div>

        </>
    )
}

export default ProductList
