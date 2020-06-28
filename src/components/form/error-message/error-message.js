import React from "react";
import { MessageContainer } from "./error-message.styles";

const ErrorMessage = ({ message, ...props }) =>
  message ? <MessageContainer {...props}>{message}</MessageContainer> : null;

export default React.memo(ErrorMessage);
