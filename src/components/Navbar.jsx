import { Nav, Navbar as NavbarBs, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"

function Navbar(props) {
    const {Cart} = props;

    const toggleCart = () => Cart.setShowCart(!Cart.showCart);

    return (
        <NavbarBs className="bg-white">
            <div className="container">
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/shop" as={NavLink}>
                        Shop
                    </Nav.Link>
                </Nav>
                <Button
                    style={{width: "2rem", height: "2rem", position: "relative"}} 
                    variant="outline-primary"
                    className="rounded-circle p-0 me-2"
                    onClick={toggleCart}
                >
                    <i className="bi bi-cart-fill" style={{fontSize: "1rem"}}></i>
                    <div
                        data-testid="cart-item-num"
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            position: "absolute", 
                            color: "white", 
                            fontSize: "0.75rem",
                            width: "1rem",
                            height: "1rem",
                            bottom: "0",
                            right: "0",
                            transform: "translate(25%,25%)"
                        }}>
                            {Cart.itemsInCart.length}
                        </div>
                </Button>
            </div>
        </NavbarBs>
    )
}
  
export default Navbar