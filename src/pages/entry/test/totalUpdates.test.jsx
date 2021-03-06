import { render, screen } from "../../../test-utils/testing-library-utils";

import { Options } from "../Options";
import userEvent from "@testing-library/user-event";

describe("TotalUpdates", () => {
  test("Update scoop subtotal when scoops changes", async () => {
    render(<Options optionType={"scoops"}></Options>);
    // make sure total starts out $0.00
    const scoopsSubtotal = screen.getByText("Scoops total: $", {
      exact: false,
    });
    expect(scoopsSubtotal).toHaveTextContent("0.00");

    // update vanilla scoops to 1 and check the subtotal
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");
    expect(scoopsSubtotal).toHaveTextContent("2.00");
    // update chocolate scoops to 2 and check subtotal
    const chocolateInput = await screen.findByRole("spinbutton", {
      name: "Chocolate",
    });
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, "2");
    expect(scoopsSubtotal).toHaveTextContent("6.00");
  });

  test("Update toppings subtotal when toppings change", async () => {
    render(<Options optionType={"toppings"}></Options>);
    // make sure total starts out $0.00
    const toppingsTotal = screen.getByText("Toppings total: $", {
      exact: false,
    });
    expect(toppingsTotal).toHaveTextContent("0.00");
    // add cherries and check subtotal
    const cherriesCheckbox = await screen.findByRole("checkbox", {
      name: "Cherries",
    });
    userEvent.click(cherriesCheckbox);
    expect(toppingsTotal).toHaveTextContent("1.50");
    // add hot fudge and check subtotal
    const hotFudgeCheckbox = screen.getByRole("checkbox", {
      name: "Hot fudge",
    });
    userEvent.click(hotFudgeCheckbox);
    expect(toppingsTotal).toHaveTextContent("3.00");

    // remove hot fudge and check subtotal
    userEvent.click(hotFudgeCheckbox);
    expect(toppingsTotal).toHaveTextContent("1.50");
  });
});
