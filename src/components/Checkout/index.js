import React, { useContext, useEffect } from 'react'
import './Checkout.css'
import { StateContext } from '../../ContextAPI'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'
import { auth, db } from '../../assets/firebase'


function Checkout() {

    //following Context's value is a Reducer therefore it returns state & dispatch
    const [state, dispatch] = useContext(StateContext)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
              if(authUser) {
                //user is logged in
                db.collection("users")
                    .doc(authUser.email)
                    .get()
                    .then((doc) => {
                        if(doc.data()?.basket !== undefined) {
                          dispatch({
                            type: 'SET_USER',
                            payload: {
                                user: authUser,
                                basket: doc.data().basket
                            }
                          })
                        }else {
                          dispatch({
                            type: 'SET_USER',
                            payload: {
                                user: authUser,
                                basket: []
                            }
                          })
                        }
                    })
              }else {
                //user is logged out
                dispatch({
                  type: 'SET_USER',
                  payload: {
                      user: null,
                      basket: []
                  }
                })
              }
            })
        return () => {
          unsubscribe()
        }
    }, [dispatch])


    return (
        <div className="checkout">
            <div className="checkoutProduct__left">
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter/SABSN2GL/CatIngress/CI_phase3_N2GL_PC_english.jpg"
                    alt="advertisment"
                    className="checkout__adImg"
                />
                {
                    state?.basket.length ? (
                        <div>
                            <h2 className="checkout__title">Your Amazon Cart</h2>
                            {
                                state?.basket.map((product, index) => (
                                    <CheckoutProduct key={product.id + index} {...product}  />
                                ))
                            }
                        </div>
                    ) : (
                        <div>
                            <h2>Your Amazon Cart is empty</h2>
                            <p>
                                Your shopping cart is empty. Go and add items to your cart by simply
                                hitting the "Add to cart" button beneath your desired product.
                            </p>
                        </div>
                    )
                }
            </div>

            <div className="checkoutProduct__right">
                {
                    state?.basket.length && (
                        <SubTotal />
                    )
                }
            </div>
        </div>
    )
}

export default Checkout
