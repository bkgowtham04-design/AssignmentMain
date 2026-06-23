import React from "react";

const withUpperCase = (WrappedComponent) => {
  return ({ text, ...props }) => {
    const upperText = text.toUpperCase();

    return <WrappedComponent text={upperText} {...props} />;
  };
};

export default withUpperCase;