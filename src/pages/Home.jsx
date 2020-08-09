import React, { useCallback, useEffect } from "react";
import { CategoriesNav, DropDownFilter } from "../components";
import { PizzaItem } from "../components/PizzaItem";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setSortBy,
  setBgBody
} from "../redux/actions/filtersAction";
import { fetchItems } from "../redux/actions/itemsAction";
import { Spinner } from "../components/Spinner";
import { Filters } from "../components/Filters";
import { addItemCart } from "../redux/actions/cartAction";

const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые"];
const sortItems = [
  { name: "Популярности", type: "popular", order: "desc" },
  { name: "Цене", type: "price", order: "desc" },
  { name: "Алфавиту", type: "name", order: "asc" }
];
const bgBodyArr = ["white", "black", "red"];

export const Home = props => {
  const dispatch = useDispatch();

  const items = useSelector(({ items }) => items.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const { category, sortBy, bgBody } = useSelector(({ filters }) => filters);


  useEffect(() => {
    dispatch(fetchItems(category, sortBy));
  }, [category, dispatch, sortBy]);

  const onSelectCategory = useCallback(id => {
    dispatch(setCategory(id));
  }, [dispatch]);

  const onSelectSortBy = useCallback(name => {
    dispatch(setSortBy(name));
  }, [dispatch]);

  const onSelectFilter = useCallback(name => {
    dispatch(setBgBody(name));
  }, [dispatch]);

  const addItemToCart = obj => {
    dispatch(addItemCart(obj));
  };
  return (
    <>
      <Spinner />
      <Filters
        bgBodyArr={bgBodyArr}
        bgBody={bgBody}
        activeClick={onSelectFilter}
      />
      <div data-uk-grid className="uk-flex-middle uk-margin-large-bottom">
        <div className="uk-width-expand">
          <CategoriesNav
            activeCategory={category}
            handlerActive={onSelectCategory}
            items={categoryNames}
          />
        </div>
        <div className="uk-width-auto">
          <DropDownFilter
            handlerActive={sortBy.type}
            items={sortItems}
            onClickSort={onSelectSortBy}
          />
        </div>
      </div>
      <div className="uk-child-width-1-4" data-uk-grid>
        {items.map((items, id) => (
          <PizzaItem
            cartCount={cartItems[items.id] && cartItems[items.id].items.length}
            onClickAddItem={addItemToCart}
            key={id}
            {...items}
          />
        ))}
      </div>
    </>
  );
};
