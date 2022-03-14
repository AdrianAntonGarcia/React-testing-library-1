import { Alert } from "react-bootstrap";
import React from "react";

export const AlertBanner = ({ message, variant }) => {
  const alertMessage =
    message || "An unexpected error occurred. Please try again later.";
  const alertVariant = variant || "danger";
  return (
    <Alert variant={alertVariant} style={{ backgroundColor: "red" }}>
      {alertMessage}
    </Alert>
  );
};
