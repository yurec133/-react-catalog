import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = props => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  return (
    <header className="uk-margin-medium-bottom uk-section-small">
      <div className="uk-container">
        <div data-uk-grid className="uk-flex-between uk-flex-middle">
          <div className="uk-width-auto">
            <Link className="uk-logo" to="/">
              Магазин
            </Link>
          </div>
          <div className="uk-width-auto">
            <div data-uk-grid className="uk-flex-middle">
              <div className="uk-width-auto uk-text-bold">{totalPrice && totalPrice + ' грн.'}</div>
              <div className="uk-width-expand">
                <Link
                  to="cart"
                  className="uk-icon-button uk-position-relative"
                  data-uk-icon="cart"
                >
                  <span className="uk-badge uk-position-top-right uk-position-z-index">
                    {totalCount}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
