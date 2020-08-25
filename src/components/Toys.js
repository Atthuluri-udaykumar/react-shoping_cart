import React, { useContext } from 'react'
import { NewContext } from './context/Context'

import ants from './img/toy-1.jpg'
import hen from './img/toy-2.jpg'
import teddy from './img/toy-3.jpg'
import SideNav from './SideNav'
import { Link } from 'react-router-dom'


const Toys = () => {
    const { toys, addToCart, decreassCart, incressCart } = useContext(NewContext)

    const images = (item) => {
        if (item.image === "ants") {
            return ants
        } else if (item.image === "hen") {
            return hen
        } else if (item.image === "teddy") {
            return teddy
        }
    }


    return (
        <div className="row">
            <SideNav />


            <div className="container py-5 col-sm-10">
                <div className="row">
                    {toys.map((item, index) => {
                        return <div className="col-sm-4" key={index}>
                            <div className="card">
                                <img src={images(item)} className="card-img-top" alt="cars" />
                                <div className="card-body text-center">
                                    <h3 className="card-title text-uppercase">{item.name}</h3>
                                    <p className="card-text">${item.cost}.00</p>
                                    {item.quantity > 0 ?
                                        <div className="p-2">
                                            <p className="p-0 m-0">Number Of Items Selected:- <br /><button onClick={() => decreassCart(item, index)}>-</button> {item.quantity}<button onClick={() => incressCart(item, index)}>+</button></p>
                                            <Link to="/cart">Go to the cart to view the item :-)</Link>
                                        </div>
                                        : null}
                                    <button onClick={() => {
                                        addToCart(item, index)
                                    }} className="btn btn-primary btn-block">add to cart</button>
                                </div>
                            </div>
                        </div>

                    })}

                </div>

            </div>
        </div >
    )
}

export default Toys
