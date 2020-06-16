import React, { Children, useReducer } from "react";

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const bounceAction = {};

    for (let key in actions) {
      bounceAction[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...bounceAction }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context: Context, Provider: Provider };
};
