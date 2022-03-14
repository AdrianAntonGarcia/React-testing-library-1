import { render, screen } from "@testing-library/react";

import { Options } from "../Options";

describe("Displays", () => {
  test("Displays image for each scoop option from server", async () => {
    render(<Options optionType="scoops" />);

    // Find images
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });

  test("toppings", async () => {
    render(<Options optionType="toppings" />);

    // Find images
    const toppingImages = await screen.findAllByRole("img", {
      name: /topping$/i,
    });
    expect(toppingImages).toHaveLength(3);

    // Confirm alt text of images
    const altText = toppingImages.map((element) => element.alt);
    console.log(toppingImages);
    expect(altText).toEqual([
      "Cherries topping",
      "M&Ms topping",
      "Hot fudge topping",
    ]);
  });
});
