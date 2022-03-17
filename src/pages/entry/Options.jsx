import React, { useEffect, useState } from "react";

import { AlertBanner } from "../common/AlerBanner";
import { Row } from "react-bootstrap";
import { ScoopOption } from "./ScoopOption";
import { ToppingOption } from "./ToppingOption";
import axios from "axios";
import { pricesPerItem } from "../../constants";
import { useOrderDetails } from "../../context/OrderDetails";

export const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDetails, updateItemCount] = useOrderDetails();
  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    let isMounted = true;
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => {
        if (isMounted) {
          setItems(res.data);
        }
      })
      .catch((error) => {
        setError(true);
      });
    return () => {
      isMounted = false;
    };
  }, [optionType]);
  if (error) {
    return <AlertBanner />;
  }

  // TODO: replace null with toppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>{pricesPerItem[optionType]} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
};
