import React from "react";
import { render } from "@testing-library/react";
import Tooltip from "@/components/Main-Content/Contact/components/ToolTIp";
import { IconCopyToolProps } from "../../../services/types/iconCopyTool";

describe("Tooltip", () => {
  test("renders Tooltip component", () => {
    const iconCopyProps: IconCopyToolProps = {
      type: "email",
      value: "salve"
    };
    const { getByLabelText } = render(<Tooltip {...iconCopyProps} />);
    expect(getByLabelText(`Copiar ${iconCopyProps.type}`)).toBeInTheDocument();
  });
});
