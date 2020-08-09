import React from "react";
import { useSelector } from "react-redux";
export const Spinner = () => {
  const items = useSelector(({ items }) => items);
  return (
    !items.isLoading && (
      <div className="uk-position-center">
        <span data-uk-spinner="ratio: 4.5"></span>
      </div>
    )
  );
};
