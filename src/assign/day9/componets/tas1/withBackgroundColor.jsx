import React from "react";

const withBackgroundColor = (WrappedComponent) => {
  const EnhancedComponent = ({ color, ...props }) => {
    return (
      <div style={{ backgroundColor: color, padding: "20px" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return EnhancedComponent;
};

export default withBackgroundColor;