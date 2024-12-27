import Info from "../../src/components/Info.jsx";

const mockTextFirstTab = "Description";

const mockTextSecondTab = "Additional Information";
describe("<Info />", () => {
  it("should render and display expected content", () => {
    // Mount the Info component

    cy.mount(<Info />);
    cy.get("div.react-tabs").should("be.visible");

    cy.get("ul[role='tablist'] > li").should("have.length", 2);
    cy.get("ul[role='tablist'] > li:nth-child(1)").should(
      "have.text",

      mockTextFirstTab
    );
    cy.get("ul[role='tablist'] > li:nth-child(2)").should(
      "have.text",

      mockTextSecondTab
    );
  });
});
