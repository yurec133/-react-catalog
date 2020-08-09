import React from "react";
import {Link} from "react-router-dom";

export const CategoriesNav = React.memo(function CategoriesNav({
  activeCategory,
  items,
  handlerActive
}) {
  return (
    <ul className="uk-subnav uk-subnav-pill" data-uk-margin>
      <li
        className={activeCategory === null ? "uk-active" : ""}
        onClick={() => handlerActive(null)}
      >
        <Link to='#'>Все</Link>
      </li>
      {items.map((name, id) => (
        <li
          className={activeCategory === id ? "uk-active" : ""}
          onClick={() => handlerActive(id)}
          key={`${name}_${id}`}
        >
            <Link to='#'>{name}</Link>
        </li>
      ))}
    </ul>
  );
});
