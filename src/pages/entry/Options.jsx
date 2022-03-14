import React, { useEffect, useState } from "react";

import { Row } from "react-bootstrap";
import { ScoopOption } from "./ScoopOption";
import { ToppingOption } from "./ToppingOption";
import axios from "axios";

export const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((error) => {
        // TODO: handle error
      });
  }, [optionType]);

  // TODO: replace null with toppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
};
