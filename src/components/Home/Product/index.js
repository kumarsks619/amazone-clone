import React, { useContext } from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star'
import { StateContext } from '../../../ContextAPI'
import { useHistory } from 'react-router-dom'



function Product({ id, title, price, rating, img}) {

    //following Context's value is a Reducer therefore it returns state & dispatch
    const [ state, dispatch] = useContext(StateContext)

    const history = useHistory()

    const addToCart = () => {
        if(state.user) {
            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    id,
                    title,
                    price,
                    img,
                    rating
                }
            })
        }else {
            history.push('/login')
        }
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((val, index) => (
                            <span key={id + index}>
                                <StarIcon style={{color: "#DAA419"}} />
                            </span>
                        ))
                    }
                </div>
            </div>
            
            <img src={img} alt={title} />
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product
