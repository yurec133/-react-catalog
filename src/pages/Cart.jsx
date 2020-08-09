import React from "react";
import { CartItem } from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  minusCartItem,
  plusCartItem,
  removeCartItem
} from "../redux/actions/cartAction";
import { Link } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const products = Object.keys(items).map(key => items[key].items[0]);
  const onHandleClear = () => {
    dispatch(clearCart());
  };
  const onRemoveItem = id => {
    dispatch(removeCartItem(id));
  };
  const onMinusCartItem = id => {
    dispatch(minusCartItem(id));
  };
  const onPlusCartItem = id => {
    dispatch(plusCartItem(id));
  };

  return (
    <div className="uk-section-small uk-section-muted">
      <div className="uk-container uk-container-small">
        {totalCount ? (
          <div
            className="uk-flex-middle uk-child-auto uk-flex-between"
            data-uk-grid
          >
            <div className="uk-h3">Корзина</div>
            <div>
              <button
                className="uk-button uk-button-text"
                onClick={onHandleClear}
                data-uk-icon="icon: trash"
              >
                Очистить корзину{" "}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="uk-h3">Корзина Пустая</div>
            <Link to="/">Вернутся назад</Link>
          </div>
        )}

        <table className="uk-table uk-table-hover uk-table-striped uk-table-middle uk-table-justify">
          <tbody>
            {products.map((obj, id) => (
              <CartItem
                key={id.toString()}
                onMinusCartItem={onMinusCartItem}
                onPlusCartItem={onPlusCartItem}
                onRemoveItem={onRemoveItem}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                imageUrl={obj.imageUrl}
                name={obj.name}
                type={obj.type}
                size={obj.size}
                id={obj.id}
              />
            ))}
          </tbody>
        </table>

        <div className="uk-child-width-auto uk-flex-between uk-grid">
          <div>
            Всего пицц: <b>{totalCount}</b>
          </div>
          <div>
            Сумма заказа: <b>{totalPrice} грн.</b>
          </div>
        </div>
      </div>
    </div>
  );
};
