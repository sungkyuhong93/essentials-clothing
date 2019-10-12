import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-drop">
    <div className="cart-items" />
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

export default CartDropdown;
