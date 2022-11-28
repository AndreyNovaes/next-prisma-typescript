import React from "react";
import { findByPlaceholderText, render } from "@testing-library/react";
import InputForm from "@/components/Main-Content/Contact/components/InputForm";
import { InputProps } from "services/types/inputProps";

describe("InputForm", () => {
  test("renders InputForm component", () => {
    const inputFormProps: InputProps = {
      isError: false,
      isDisabled: false,
      value: "",
      handleOnChange: () => {},
      isRequired: false,
      name: "name",
      type: "text",
      leftIcon: null,
      label: "test",
    }
    const { getByPlaceholderText } = render(<InputForm {...inputFormProps} />);
    expect(getByPlaceholderText(/name/i)).toBeInTheDocument();
  });
});
