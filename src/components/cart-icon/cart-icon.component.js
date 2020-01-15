import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { Link } from "react-router-dom";

import "./cart-icon.styles.scss";
import { createStructuredSelector } from "reselect";
import CartIconImg from "./cart-icon.png";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon">
    <div className="cart-icon-wrap">
      <Link to="/checkout">
        <img src={CartIconImg} />
        <span className="item-count">{itemCount}</span>
      </Link>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
