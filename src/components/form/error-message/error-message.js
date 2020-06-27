import React from "react";
import { MessageContainer } from "./error-message.styles";

const ErrorMessage = ({ message }) =>
  message ? <MessageContainer>{message}</MessageContainer> : null;

export default React.memo(ErrorMessage);
