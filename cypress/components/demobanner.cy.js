import DemoBanner from "../../src/components/DemoBanner";

const mockText =
  "This is a demo store - no orders will be accepted or delivered";
describe("<DemoBanner />", () => {
  it("should render and display expected content", () => {
    cy.mount(<DemoBanner />);
    cy.get("div.demo-banner-container").should("be.visible");
    cy.get("div.demo-banner-container").should("have.text", mockText);
  });
});
