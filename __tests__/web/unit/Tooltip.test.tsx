import Tooltip from "@/components/Main-Content/Contact/components/ToolTIp";
import { render } from "@testing-library/react";
import { IconCopyToolProps } from "../../../services/types/web/iconCopyTool";

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
