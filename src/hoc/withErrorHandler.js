import React from "react";
import ModalError from "../components/UI/ModalError/ModalError";
import useHttpErrorHandler from "../hooks/http-error-handler";

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, clearError] = useHttpErrorHandler(axios);

    return (
      <>
        <ModalError show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </ModalError>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
