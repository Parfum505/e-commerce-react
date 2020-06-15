import React from "react";
import { CSSTransition } from "react-transition-group";

const cssTransitionHOC = (transProps) => (WrappedComponent) => {
  return (props) => (
    <CSSTransition {...transProps}>
      <WrappedComponent {...props} />
    </CSSTransition>
  );
};

export default cssTransitionHOC;
