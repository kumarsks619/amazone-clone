import React, { useContext } from 'react'
import StarIcon from '@material-ui/icons/Star'
import './CheckoutProduct.css'
import { StateContext } from '../../../ContextAPI'



function CheckoutProduct({ id, title, price, rating, img}) {

    //following Context's value is a Reducer therefore it returns state & dispatch
    const [ , dispatch] = useContext(StateContext)

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={img} alt={title} className="checkoutProduct__img" />

            <div className="checkoutProduct__infoContainer">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((val, index) => (
                            <span key={id + index}>
                                <StarIcon style={{color: "#DAA419"}} />
                            </span>
                        ))
                    }
                </div>
                <button  onClick={removeFromCart}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
