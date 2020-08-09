import React, { useState } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export const PizzaItem = ({
  id,
  imageUrl,
  name,
  price,
  types,
  sizes,
  onClickAddItem,
  cartCount
}) => {
  const typeProduct = ["Тонкие", "Традиционные"];
  const sizeProduct = [26, 30, 40];
  const [activeItem, setActiveItem] = useState(types[0]);
  const [activeItemSize, setActiveItemSize] = useState(0);

  const onSelectItem = id => {
    setActiveItem(id);
  };
  const onSelectSize = id => {
    setActiveItemSize(id);
  };
  const onHandlerAddItem = () => {
    const obj = {
      id,
      imageUrl,
      price,
      name,
      size: typeProduct[activeItemSize],
      type: sizeProduct[activeItem]
    };
    onClickAddItem(obj);
  };
  return (
    <div>
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <div className="uk-h4 uk-text-center">{name}</div>
        <div className="uk-padding-small uk-background-muted uk-margin-small-bottom">
          <ul className="uk-subnav uk-subnav-pill">
            {typeProduct.map((item, id) => (
              <li
                key={id.toString()}
                className={
                  activeItem === id
                    ? "uk-active"
                    : !types.includes(id)
                    ? "uk-disabled"
                    : ""
                }
              >
                <Link to='#'
                  onClick={() => onSelectItem(id)}
                  className="uk-text-lowercase"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="uk-subnav uk-subnav-pill uk-margin-remove-bottom">
            {sizeProduct.map((item, id) => (
              <li
                className={
                  activeItemSize === item
                    ? "uk-active"
                    : !sizes.includes(item)
                    ? "uk-disabled"
                    : ""
                }
                key={item}
              >
                <Link to='#' onClick={() => onSelectSize(item)}>
                  <span className="uk-text-lowercase">{item} см.</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="uk-child-width-auto uk-grid-small uk-text-center uk-flex-middle uk-flex-between"
          data-uk-grid
        >
          <div>
            <b>{price}грн</b>
          </div>
          <div>
            <button
              onClick={onHandlerAddItem}
              className="uk-button uk-button-small uk-button-default"
            >
              + Добавить
              {cartCount && <span className="uk-label uk-label-success uk-margin-small-left">{cartCount}</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PizzaItem.propTypes = {
  name: PropTypes.string
};
