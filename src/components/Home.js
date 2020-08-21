import React, { useContext } from 'react'
import { NewContext } from './context/Context'

import Benz from './img/benz.jpg'
import Lamborghini from './img/Lamborghini.jpg'
import rover from './img/range_rover.jpg'

import SideNav from './SideNav'

const Home = () => {
    const { cart, cars, addToCart } = useContext(NewContext)

    const images = (item) => {
        if (item.image === "Benz") {
            return Benz
        } else if (item.image === "rover") {
            return rover
        } else if (item.image === "Lamborghini") {
            return Lamborghini
        }
    }




    return (
        <div className="row">
            <SideNav />
            <div className="container py-5 col-sm-10">
                <div className="row">
                    {cars.map((item, index) => {
                        return <div className="col-sm-4" key={index}>
                            <div className="card">
                                <img src={images(item)} className="card-img-top" alt="cars" />
                                <div className="card-body text-center">
                                    <h3 className="card-title text-uppercase">{item.name}</h3>
                                    <p className="card-text">${item.cost}.00</p>
                                    <button onClick={() => addToCart(item, index)} className="btn btn-primary btn-block">add to cart</button>
                                </div>
                            </div>
                        </div>

                    })}

                </div>

            </div>
        </div >
    )
}

export default Home
