import React, { createContext, useState, useMemo } from 'react'


export const NewContext = createContext();

const Context = (props) => {
    const [toys, settoys] = useState([
        {
            name: "ahild ants",
            cost: 40,
            image: "ants",
            quantity: 0

        },
        {
            name: "Hen Toy",
            cost: 20,
            image: "hen",
            quantity: 0
        },
        {
            name: "Teddy Bear",
            cost: 35,
            image: "teddy",
            quantity: 0
        }
    ]);

    const [bag, setbag] = useState([
        {
            name: "Yello Bag",
            cost: 22,
            image: "bag-1",
            quantity: 0
        },
        {
            name: "Brown Bag",
            cost: 20,
            image: "bag-2",
            quantity: 0
        },
        {
            name: "Brown Ladies",
            cost: 18,
            image: "bag-3",
            quantity: 0
        }
    ])

    const [cars, setcars] = useState([
        {
            name: "Mercedes-Benz",
            cost: 72,
            image: "Benz",
            quantity: 0
        },
        {
            name: "Land Rover",
            cost: 60,
            image: "rover",
            quantity: 0
        },
        {
            name: "Lamborghini",
            cost: 55,
            image: "Lamborghini",
            quantity: 0
        }
    ])

    const [cart, setcart] = useState([])
    const [all, setall] = useState([])

    const addToCart = (item, index) => {
        let allItems = cars.concat(toys, bag)
        setall(allItems)
        if (item) {
            const findItem = allItems.find(data => data.name === item.name)
            if (findItem) {
                findItem.quantity += 1
                let x = [...allItems]
                x.splice(index, 1, findItem)
                setall(x)
            }
        }
        let filterCars = allItems.filter(data => data.quantity > 0);
        setcart(filterCars)
    }
    console.log(cart);


    const removeItem = (item, index) => {
        if (cart.length > 0) {
            const find = cart.find(i => i.name === item.name);
            if (find !== undefined) {
                if (find.quantity !== undefined) {
                    console.log(find.quantity);
                    find.quantity = 0;
                    let x = [...cart]
                    console.log(find);
                    x.splice(index, 1, find)
                    setcart(x)
                } else {
                    console.log("this is invalid");
                }
            }
        }
    }

    const clearAll = () => {
        if (cart.length > 0) {
            cart.forEach(x => {
                x.quantity = 0
                setcart(x)
            })
        }
    }

    const decreassCart = (item, index) => {
        const find = all.find(i => i.name === item.name)
        find.quantity--
        let x = [...all]
        x.splice(find.name === item.name, 1, find)
        setall(x)
    }

    const incressCart = (item, index) => {

        const find = all.find(i => i.name === item.name)
        find.quantity++
        let x = [...all]
        x.splice(find.name === item.name, 1, find)
        setall(x)
        console.log(cart);
    }

    return (
        <div>
            <NewContext.Provider value={{
                cars, addToCart: addToCart,
                cart, removeItem, clearAll,
                toys, bag, decreassCart, incressCart,

            }}>
                {props.children}
            </NewContext.Provider>
        </div>
    )
}

export default Context
