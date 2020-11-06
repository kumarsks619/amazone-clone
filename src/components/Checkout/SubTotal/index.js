import React, { useContext } from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import { StateContext } from '../../../ContextAPI'
import { cartTotal } from '../../../ContextAPI/reducer'


function SubTotal() {

    //following useContext() will return [state, dispatch]
    const [state] = useContext(StateContext)

    return (
        <div className="subTotal">
            <CurrencyFormat
                renderText={(val) => (
                    <>
                        <p>
                            SubTotal ({state?.basket.length} items) : <strong>{val}</strong>
                        </p>
                        <small className="subTotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={cartTotal(state.basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Buy</button>
        </div>
    )
}

export default SubTotal
