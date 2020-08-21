import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,

} from 'reactstrap';
import { NewContext } from './context/Context';
import { Link } from 'react-router-dom';

const Navbartop = (props) => {
    const { cart } = useContext(NewContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const quantity = cart.reduce((sum, { quantity }) => { return sum + quantity }, 0)

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <Link className="navbar-brand" to="/">Shoping Cart</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem >
                            <Link className="nav-link" to="/cart">Cart<span className="bg-info p-2 text-dark h5 rounded-circle">{quantity}</span></Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navbartop;