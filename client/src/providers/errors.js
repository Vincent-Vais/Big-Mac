import React, { createContext, useState } from "react";

export const ErrorsContext = createContext({
  errors: [],
  addError: () => {},
  clearErrors: () => {},
});

export const ErrorsProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);

  const addError = (err) => setErrors([...errors, err]);

  const clearErrors = () => setErrors([]);

  return (
    <ErrorsContext.Provider
      value={{
        errors,
        addError,
        clearErrors,
      }}
    >
      {children}
    </ErrorsContext.Provider>
  );
};
