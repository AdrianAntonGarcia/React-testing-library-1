import { Options } from "./Options";
import React from "react";

export const OrderEntry = () => {
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
};
