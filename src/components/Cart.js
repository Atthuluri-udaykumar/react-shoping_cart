import React, { useContext } from 'react'
import { NewContext } from './context/Context'

import Benz from './img/benz.jpg'
import Lamborghini from './img/Lamborghini.jpg'
import rover from './img/range_rover.jpg'

import ants from './img/toy-1.jpg'
import hen from './img/toy-2.jpg'
import teddy from './img/toy-3.jpg'

import yellow from './img/bag-1.jpg'
import bown from './img/bag-2.jpg'
import ladies from './img/bag-3.jpg'

const Cart = () => {
    const { cart, removeItem, clearAll, decreassCart, incressCart } = useContext(NewContext)
    let total = ""
    if (cart.length) {
        total = cart.reduce((sum, { quantity, cost }) => { return sum + (quantity * cost) }, 0)
    } else {
        total = 0
    }

    const images = (item) => {
        if (item.image === "Benz") {
            return Benz
        } else if (item.image === "rover") {
            return rover
        } else if (item.image === "Lamborghini") {
            return Lamborghini
        }
        else if (item.image === "ants") {
            return ants
        } else if (item.image === "hen") {
            return hen
        } else if (item.image === "teddy") {
            return teddy
        }
        else if (item.image === "bag-1") {
            return yellow
        } else if (item.image === "bag-2") {
            return bown
        } else if (item.image === "bag-3") {
            return ladies
        }
    }

    return (
        <div className="container p-5">
            <div className="text-center">
                <button onClick={clearAll} className="btn btn-danger">clear cart</button>
                <h3>Total Cost Of Cart :-${total}.00</h3>
            </div>
            <div className="row">

                <div className="col-12">
                    <table class="table">

                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Name</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Quantity</th>
                                <th>Total Cost Of Item</th>
                            </tr>
                        </thead>
                        {cart.length ?
                            <tbody>
                                {cart.map((item, index) => {
                                    return <React.Fragment key={index}>
                                        <tr>{item.quantity > 0 ?
                                            <React.Fragment>
                                                <th scope="row" onClick={() => removeItem(item, index)} style={{ cursor: "pointer" }} >
                                                    <i className="fa fa-scissors" style={{ fontSize: "48px", color: "red" }}></i>
                                                </th>
                                                <td><img src={images(item)} alt="it is me" style={{ height: "150px", width: "150px" }} /></td>
                                                <td>{item.name}</td>
                                                <td>${item.cost}.00</td>
                                                <td>
                                                    {item.quantity > 0 ? <i style={{ cursor: "pointer" }} onClick={() => decreassCart(item, index)} className="fa fa-arrow-left h1 " aria-hidden="true"></i> : removeItem(index)}
                                            &nbsp; &nbsp;<span className="h5">{item.quantity}</span>
                                            &nbsp; &nbsp;<i style={{ cursor: "pointer" }} onClick={() => incressCart(item, index)} className="fa fa-arrow-right h1" aria-hidden="true"></i>
                                                </td>
                                                <td>${item.cost * item.quantity}.00</td>
                                            </React.Fragment>
                                            : null}

                                        </tr>
                                    </React.Fragment>
                                })}


                            </tbody >
                            : null}

                    </table>
                </div>

            </div>
        </div >
    )

}

export default Cart
