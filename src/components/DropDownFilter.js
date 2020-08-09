import React, { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom";

export const DropDownFilter = React.memo(function DropDownFilter({ items, handlerActive, onClickSort }) {
  const [openModal, setOpenModal] = useState(false);
  const softRef = useRef();
  const toggleOpen = () => {
    setOpenModal(!openModal);
  };
  const handleVisible = e => {
    if (!e.path.includes(softRef.current)) {
      setOpenModal(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleVisible);
  }, []);

  const onSelectItem = id => {
    onClickSort(id)
  };
  const activeSelect = items.find(obj => obj.type === handlerActive).name;

  return (
    <>
      <div className="uk-inline" ref={softRef} onClick={toggleOpen}>
        <button
          className="uk-button-small uk-button uk-button-link uk-text-left"
        >
          <span className="uk-text-lowercase">
            Сортировать по: <b>{activeSelect}</b>
          </span>
        </button>
        <div
            className={`uk-dropdown uk-dropdown-boundary uk-dropdown-bottom-left ${
                openModal ? "uk-open" : ""
            }`}
        >
          <ul className="uk-nav uk-dropdown-nav">
            {items.map((items, id) => (
                <li
                    className={handlerActive === items ? "uk-active" : ""}
                    onClick={() => onSelectItem(items)}
                    key={`${items}_${id}`}
                >
                  <Link to='#'>
                    {items.name}
                  </Link>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
});
