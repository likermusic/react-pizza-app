import React, { memo, useCallback, useMemo, useState } from "react";
import { addItem } from "../store/slices/cartSlice";
import { Link } from "react-router-dom";
import { Pizza, Size, Type } from "../types/pizza";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

const PizzaBlock = memo(function ({
  id,
  imageUrl,
  title,
  types,
  sizes,
  price,
  category,
  rating,
  isTitleClickable = true,
}: Pizza & { isTitleClickable?: boolean }) {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const [activeSize, setActiveSize] = useState<Size>(0);

  const [activeType, setActiveType] = useState<Type>(types[0]);

  const item = { id, imageUrl, title, price, activeSize, activeType };

  const qty: number = useMemo(() => {
    const ind = cartItems.findIndex((item) => item.id == id);
    let qty = 0;
    if (ind != -1) {
      qty = cartItems[ind].totalQty;
    }
    return qty;
  }, [id, cartItems]);

  const changeTypeHandler = useCallback((type: Type) => {
    setActiveType(type);
  }, []);

  const changeSizeHandler = useCallback((ind: Size) => {
    setActiveSize(ind);
  }, []);

  const addItemHandler = useCallback(
    (
      item: Pick<Pizza, "id" | "imageUrl" | "title" | "price"> & {
        activeSize: Size;
        activeType: Type;
      }
    ) => {
      dispatch(addItem(item));
    },
    [dispatch]
  );

  return (
    <div className="pizza-block">
      {isTitleClickable ? (
        <Link to={`pizzas/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4
            style={{ textDecoration: "underline" }}
            className="pizza-block__title"
          >
            {title}
          </h4>
        </Link>
      ) : (
        <>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4 className="pizza-block__title">{title}</h4>
        </>
      )}
      <div className="pizza-block__selector">
        <ul>
          {types.map((type) =>
            types.length > 1 ? (
              <li
                onClick={() => changeTypeHandler(type)}
                key={type}
                className={type == activeType ? "active" : ""}
              >
                {type == 0 ? "тонкое" : "традиционное"}
              </li>
            ) : (
              <li key={type} className="active">
                {type == 0 ? "тонкое" : "традиционное"}
              </li>
            )
          )}
        </ul>
        <ul>
          {sizes.map((size, ind) => (
            <li
              onClick={() => changeSizeHandler(ind as Size)}
              key={size}
              className={ind == activeSize ? "active" : ""}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div
          className="button button--outline button--add"
          onClick={() => addItemHandler(item)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{qty}</i>
        </div>
      </div>
    </div>
  );
});

export default PizzaBlock;
