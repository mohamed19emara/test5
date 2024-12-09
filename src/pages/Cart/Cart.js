import React from "react";
import { useCart } from "../../context/CartContext"; // Import useCart
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Get cart items from CartContext

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th> {/* Added actions column */}
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="5">Your cart is empty.</td>
            </tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => removeFromCart(item.id)} // Remove item from cart
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="cart-total">
        <h2>Total: ${total.toFixed(2)}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
