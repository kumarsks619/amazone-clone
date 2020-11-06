import React from 'react'
import './Home.css'
import Product from './Product'
import { products } from '../../assets/products'


function Home() {


    return (
        <div className="home">
            <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase2/v1/Phase2_Rec_PC_Hero_1x._CB417639218_.jpg"
                alt="home-banner"
                className="home__bannerImg"
            />
            
            <div className="home__row">
                {
                    products.slice(0,3).map(({id, title, price, rating, img}) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            rating={rating}
                            img={img}
                        />
                    ))
                }
            </div>

            <div className="home__row">
                {
                    products.slice(3,5).map(({id, title, price, rating, img}) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            rating={rating}
                            img={img}
                        />
                    ))
                }
            </div>

            <div className="home__row">
                {
                    products.slice(5,6).map(({id, title, price, rating, img}) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            rating={rating}
                            img={img}
                        />
                    ))
                }
            </div>

            <div className="home__row">
                {
                    products.slice(6,9).map(({id, title, price, rating, img}) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            rating={rating}
                            img={img}
                        />
                    ))
                }
            </div>
            
        </div>
    )
}

export default Home
