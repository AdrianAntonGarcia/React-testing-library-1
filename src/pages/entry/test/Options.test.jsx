import { render, screen } from "@testing-library/react";

import { Options } from "../Options";

describe("Displays", () => {
  test("Displays image for each scoop option from server", () => {
    render(<Options optionType="scoops" />);

    // Find images
    const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });
});