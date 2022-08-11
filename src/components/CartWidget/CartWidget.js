import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const { getCartQuantity, totalQuantity } = useContext(CartContext)

    return (
        <div style={{ justifyContent:"space-around" }}>
            <img src="/images/cart.ico" alt="cart-widget"/>
            { totalQuantity }
        </div>
    )
}

export default CartWidget;