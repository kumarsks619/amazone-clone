import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { StateContext } from '../../ContextAPI';
import { auth } from '../../assets/firebase';


function Header() {

    //following useContext() will return [state, dispatch]
    const [ state, dispatch ] = useContext(StateContext)

    const handleSignOut = () => {
        dispatch({
            type: 'CLEAR_CART'
        })

        auth.signOut()
    }

    return (
        <nav className="header">
            <Link to="/">
                <img 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon-logo"
                    className="header__logo"
                />
            </Link>

            <div className="header__searchContainer">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" /> 
            </div>

            <div className="header__iconsContainer">
                <Link to={ state.user ? "#" : "/login"} className="header__link">
                    <div className="header__iconBox" onClick={handleSignOut}>
                        <span className="header__iconBoxTop">Hello, {state.user?.email}</span>
                        <span className="header__iconBoxBottom">
                            { state.user ? "Sign Out" : "Sign in" }
                        </span>
                    </div>
                </Link>

                <Link to="#" className="header__link">
                    <div className="header__iconBox">
                        <span className="header__iconBoxTop">Returns</span>
                        <span className="header__iconBoxBottom">& Orders</span>
                    </div>
                </Link>

                <Link to="#" className="header__link">
                    <div className="header__iconBox">
                        <span className="header__iconBoxTop">Your</span>
                        <span className="header__iconBoxBottom">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__cartIconBox">
                        <span className="header_cartIconTop">{state?.basket.length}</span>
                        <ShoppingCartIcon className="header_cartIconBottom" />
                    </div>
                </Link>
            </div>
            
        </nav> 
    )
}

export default Header
 