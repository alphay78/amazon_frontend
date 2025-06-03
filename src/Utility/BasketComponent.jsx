// src/components/BasketComponent.jsx
import React, { useReducer } from "react";
import { reducer, initialState } from "../Utility/reducer";
import { Type } from "../Utility/action.type";

const BasketComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Basket Items: {state.basket.length}</h2>
      <button
        onClick={() => dispatch({ type: Type.ADD_TO_BASKET, item: "New Item" })}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default BasketComponent;
