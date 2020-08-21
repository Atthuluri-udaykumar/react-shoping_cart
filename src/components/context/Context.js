import React, { createContext, useState } from 'react'

export const NewContext = createContext();

const Context = (props) => {
    const [toys, settoys] = useState([
        {
            name: "ahild ants",
            cost: 40,
            image: "ants"
        },
        {
            name: "Hen Toy",
            cost: 20,
            image: "hen"
        },
        {
            name: "Teddy Bear",
            cost: 35,
            image: "teddy"
        }
    ]);

    const [bag, setbag] = useState([
        {
            name: "Yello Bag",
            cost: 22,
            image: "bag-1"
        },
        {
            name: "Brown Bag",
            cost: 20,
            image: "bag-2"
        },
        {
            name: "Brown Ladies",
            cost: 18,
            image: "bag-3"
        }
    ])

    const [cars, setcars] = useState([
        {
            name: "Mercedes-Benz",
            cost: 72,
            image: "Benz"
        },
        {
            name: "Land Rover",
            cost: 60,
            image: "rover"
        },
        {
            name: "Lamborghini",
            cost: 55,
            image: "Lamborghini"
        }
    ])

    const [cart, setcart] = useState([])

    const addToCart = (item, index) => {

        const newCart = [...cart]
        let itemInCart = newCart.find(cart => cart.name === item.name)

        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...item,
                quantity: 1
            };
            newCart.push(itemInCart)

        }
        setcart(newCart)

    }

    const removeItem = (index) => {
        const x = [...cart]
        x.splice(index, 1);
        setcart(x);
    }

    const clearAll = () => {
        setcart([])
    }

    const decreassCart = (item, index) => {
        const decres = item
        decres.quantity--
        const x = [...cart]
        x.splice(index, 1, decres);
        setcart(x)
    }
    const incressCart = (item, index) => {
        const incress = item
        incress.quantity++
        const x = [...cart]
        x.splice(index, 1, incress);
        setcart(x)
    }

    return (
        <div>
            <NewContext.Provider value={{ cars, addToCart: addToCart, cart, removeItem, clearAll, toys, bag, decreassCart, incressCart }}>
                {props.children}
            </NewContext.Provider>
        </div>
    )
}

export default Context
