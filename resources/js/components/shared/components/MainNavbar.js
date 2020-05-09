import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container
} from "reactstrap";

const MainNavbar = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="white" light expand="md">
            <Container>
                <NavbarBrand href="/">MERAZMOBILE</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Brand
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <a href="/products/xiaomi">Xiaomi</a>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <a href="/products/oneplus">Oneplus</a>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <a href="/products/oppo">Oppo</a>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/contact">Locate Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/cart">Cart</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/register">Register</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavbar;
