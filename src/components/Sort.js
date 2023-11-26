import React, { useRef, useState, useContext, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../store/slices/filterSlice";
import { AppContext } from "./App";

function Sort() {
  const { type, isUp } = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();

  const sortTypes = ["популярности", "цене", "алфавиту"];

  const [isOpen, setIsOpen] = useState(false);

  let svgStyles = !isUp ? "sortSvg sortSvg__sort-down" : "sortSvg";

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          onClick={
            // () => dispatch(setSort({ type, isUp: !isUp }))
            useCallback(() => {
              dispatch(setSort({ type, isUp: !isUp }));
            }, [dispatch, type, isUp])
          }
          className={svgStyles}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span
          //onClick={() => setIsOpen(!isOpen)}
          onClick={useCallback(() => {
            setIsOpen(!isOpen);
          }, [isOpen])}
        >
          {sortTypes[type]}
        </span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {sortTypes.map((type, ind) => (
              <li
                onClick={() => {
                  dispatch(setSort({ type: ind, isUp: isUp }));
                  setIsOpen(false);
                }}
                key={ind}
                className={type == ind ? "active" : ""}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
