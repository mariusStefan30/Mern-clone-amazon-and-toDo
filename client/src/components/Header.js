import React, { Component } from 'react';
import Img1 from "../images/basketx64.png";
import Img2 from "../images/searchNew.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>

            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />
                <img className="header__searchIcon"
                    src={Img2}
                />
            </div>

            <div className="header__nav">
                <div className="header__option ">
                    <Link to="/todoList" className="header__optionTwo">
                        <h3>TodoList</h3>
                    </Link>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">Hello Guest</span>

                    <span className="header__optionTwo">Sign in</span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">Returns</span>

                    <span className="header__optionTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">Your</span>

                    <span className="header__optionTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <span >
                            <img src={Img1} />
                        </span>
                    </div>
                </Link>
                <div>
                    <span className="header__optionTwo header__basketCount">0
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;