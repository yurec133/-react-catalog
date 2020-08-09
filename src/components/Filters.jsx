import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Filters = ({ bgBodyArr, activeClick, bgBody }) => {
  useEffect(() => {
    document.body.style.background = `${bgBody}`;
  }, [bgBody]);
  return (
    <>
      <ul className="uk-subnav uk-subnav-pill">
        {bgBodyArr.map((item, id) => (
          <li key={id} className={item === bgBody ? "uk-active" : ""}>
            <Link to="#" onClick={() => activeClick(item)}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
