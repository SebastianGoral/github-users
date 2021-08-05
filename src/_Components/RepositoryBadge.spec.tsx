import { render, screen } from "@testing-library/react";
import { RepositoryBadge } from "./RepositoryBadge";

describe("When using RepositoryBadge", () => {
  it("should be rendered with title", () => {
    render(<RepositoryBadge title="user" />);
    const badge = screen.getByText("user");
    expect(badge).toBeInTheDocument();
  });

  it("should be rendered with description", () => {
    render(<RepositoryBadge description="description" />);
    const badge = screen.getByText("description");
    expect(badge).toBeInTheDocument();
  });

  it("should be show proper starts amount", () => {
    render(<RepositoryBadge stars={12} />);
    const stars = screen.getByTestId("stars");
    expect(stars.textContent).toBe("12");
  });
});
