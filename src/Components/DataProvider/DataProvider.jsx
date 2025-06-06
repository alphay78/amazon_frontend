import { useReducer, createContext } from "react";
// import { initialState, reducer } from "../../Utility/reducer";

// Create Context
export const DataContext = createContext();

export const DataProvider = ({ children,reducer,initialState }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={useReducer(reducer,initialState)}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
