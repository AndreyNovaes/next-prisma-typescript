import React from "react";
import { render } from "@testing-library/react";
import ContactButton from "@/components/Main-Content/About/components/contact_Button";

describe("ContactButton component tests", () => {
  test("this component render in every page inside Layout", () => {
    const { getByRole } = render(<ContactButton />);
    expect(getByRole('heading', { name: /quer saber mais sobre mim \?/i })).toBeInTheDocument();
    expect(getByRole('link', { name: /entre em contato/i })).toHaveAttribute('href', '/contato');
  });
});
