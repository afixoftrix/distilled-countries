import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CountryCard from "../components/CountryCard";
import InfoCard from "../components/InfoCard";

/**
 * The most important components to test for this version of the app are the country card and the infocards
 * The hold the core information needed by users (imo).
 */

const mockProps = {
  countryName: "Aruba",
  capital: "Oranjestad",
  population: "6,908,224",
  flag: "https://flagcdn.com/aw.svg",
  currency: "USD",
  language: "English, Hindi, Tamil",
};

describe("CountryCard", () => {
  it("renders when no data avail", () => {
    render(<CountryCard flag={mockProps.flag}/>);
    expect(screen.getByText("Capital:")).toBeInTheDocument();
  });
  it("renders with correct prop values", () => {
    const { countryName, capital, population, flag } = mockProps;
    render(<CountryCard countryName={countryName} capital={capital} population={population} flag={flag} />);
    expect(screen.getByText(countryName)).toBeInTheDocument();
  });
});

describe("InfoCard", () => {
  it("renders with no data(props) avail", () => {
    render(<InfoCard flag={mockProps.flag}/>)
    expect(screen.getByText("Capital:")).toBeInTheDocument();
  })
  it("renders with correct prop values", () => {
    const { countryName, capital, population, flag, currency, language } = mockProps;
    render(
      <InfoCard
        country={countryName}
        capital={capital}
        pop={population}
        currency={currency}
        flag={flag}
        langs={language}
      />
    );
    expect(screen.getByText(countryName)).toBeInTheDocument();
  });
})
