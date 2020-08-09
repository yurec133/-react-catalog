import React from "react";

export const CartItem = ({
  name,
  type,
  size,
  imageUrl,
  totalPrice,
  totalCount,
  onRemoveItem,
  id,
  onMinusCartItem,
  onPlusCartItem
}) => {
  const handlerRemoveItem = () => {
    onRemoveItem(id);
  };
  const handlerMinusCartItem = () => {
    onMinusCartItem(id);
  };
  const handlerPlusCartItem = () => {
    onPlusCartItem(id);
  };

  return (
    <tr>
      <td>
        <div data-uk-grid className="uk-flex-middle">
          <div className="uk-width-auto">
            <img alt="Img" width="50" src={imageUrl} />
          </div>
          <div className="uk-width-expand">
            <div className="uk-h4 uk-margin-remove">{name}</div>
            <div className="uk-text-small">
              {type} тесто, {size} см
            </div>
          </div>
        </div>
      </td>
      <td>
        <button
          onClick={handlerMinusCartItem}
          type="button"
          data-uk-icon="icon:  minus-circle;"
        ></button>
        <b className="uk-inline-block uk-margin-small-left uk-margin-small-right">
          {totalCount}
        </b>
        <button
          onClick={handlerPlusCartItem}
          type="button"
          data-uk-icon="icon:  plus-circle;"
        ></button>
      </td>
      <td>
        <b>{totalPrice} грн</b>
      </td>
      <td>
        <button
          onClick={handlerRemoveItem}
          type="button"
          data-uk-close
        ></button>
      </td>
    </tr>
  );
};
