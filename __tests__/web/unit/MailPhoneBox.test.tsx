import React from "react";
import { render } from "@testing-library/react";
import MailPhoneBox from "@/components/Main-Content/Contact/components/MailPhoneBox";

describe("MailPhoneBox", () => {
  test("renders MailPhoneBox component", () => {
    const { getByText } = render(<MailPhoneBox />);
    expect(getByText(/Email: andreynovaespro@gmail.com/i)).toBeInTheDocument();
    expect(getByText(/Telefone: \+55 21 99431-2856/i)).toBeInTheDocument();
  });
});
