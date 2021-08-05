import { getByRole, render } from "@testing-library/react";
import { Input } from "./Input";

describe("When using Input", () => {
  it("should display value in input if is provided", () => {
    const TEXT_MOCK = "test";

    const spy = jest.fn();
    const { container } = render(<Input onChange={spy} value={TEXT_MOCK} />);

    const input = getByRole(container, "input") as HTMLInputElement;

    expect(input.value).toBe(TEXT_MOCK);
  });
});
