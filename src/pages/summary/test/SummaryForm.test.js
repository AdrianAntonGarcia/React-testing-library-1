import { render, screen } from "@testing-library/react";

import { SummaryForm } from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("Testing summary form", () => {
  test("Initial conditions", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(confirmButton).toBeDisabled();
  });

  test("Checkbox disables button on first click and enables second click", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();
    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });

  test("Popover responds to hover", () => {
    // popover starts out hidden
    // popover appears upon mouseover of checkbox label
    // popover disappears when we mouse out
  });

  /* test("Checkbox and button", () => {
      render(<SummaryForm></SummaryForm>);
      const checkbox = screen.getByRole("checkbox", { name: "check" });
      const button = screen.getByRole("button", { name: "button" });
      expect(checkbox).not.toBeChecked();
      expect(button).toBeDisabled();
      fireEvent.click(checkbox);
      expect(button).toBeEnabled();
      fireEvent.click(checkbox);
      expect(button).toBeDisabled();
    });*/
});
