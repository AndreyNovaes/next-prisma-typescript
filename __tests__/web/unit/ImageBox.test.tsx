import React from "react";
import { render } from "@testing-library/react";
import ImageBox from "@/components/Main-Content/About/components/imageBox";

describe("ImageBox component tests", () => {
  test("/about", () => {
    const { getByAltText } = render(<ImageBox />);
    expect(getByAltText(/autor da página/i)).toBeInTheDocument();
  });
});
