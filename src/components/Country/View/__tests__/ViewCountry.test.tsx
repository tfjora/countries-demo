/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { fakeCountryList } from "../../../../_mockData/country";

import ViewCountry from "../ViewCountry";

const defaultProps = {
  countriesToVisit: fakeCountryList,
  onRemove: jest.fn(),
  onVisited: jest.fn(),
};

describe("ViewCountry - smoke tests", () => {
  test("should render OK", () => {
    render(<ViewCountry {...defaultProps} />);
  });
});

describe("View country", () => {
  test("Should find country: Norway, Finland and Sweden", () => {
    render(<ViewCountry {...defaultProps} />);
    expect(screen.queryByText("Norway")).toBeTruthy();
    expect(screen.queryByText("Sweden")).toBeTruthy();
    expect(screen.queryByText("Finland")).toBeTruthy();
  });
});
