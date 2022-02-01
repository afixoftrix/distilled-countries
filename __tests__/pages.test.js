import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
//import MyApp from '../pages/_app'
import Home from '../pages'
// import CountryInfo from '../pages/[country]'
import allRes from './all-res.json'

/**
 * This is still a work in progress. I'm trying to reacquint myself with the react testing library and I don't think I have enough time to get this all sorted
 * I've left some of the basic tests I plan to implement to show my thought process. I'm just running into issues I'm not familiar with at the moment.
 */

const server = (status="success") => setupServer(
  rest.get("https://restcountries.com/v3.1/all", (req, res, ctx) => {
    const jsonToSend = status == "success" ? { "message": "failed req" } : allRes;
    return res(
      ctx.json(jsonToSend)
    );
  })
);



// Enable API mocking before tests.
beforeAll(() => server().listen())

// // Reset any runtime request handlers we may add during the tests.
// afterEach(() => server().resetHandlers())

// // Disable API mocking after the tests are done.
// afterAll(() => server().close())

// Need to find a way to test _app.js
// describe("App", () => {
//   it("renders app component", async () => {
//     await render(<MyApp />);
    
//     screen.debug();
//   });
// });

describe("Home", () => {
  it("renders with 'loading...' text when mounted", () => {
    render(<Home />);
    expect(screen.getByText("loading...")).toBeInTheDocument();
  });

  // it("handles 'no data' state gracefully...", async () => {
  //   render(<Home />);
  //   expect(screen.findByText("There was an issue loading this page")).toBeInTheDocument();
  // })
  // it("renders country components after on promise resolution", async () => {
  //   render(<Home />);
    
  //   const links = await screen.getByRole("link", { current: false });
  //   expect(links).toBeInTheDocument();
  // });
});

// describe("CountryInfo", () => {
//   it("renders CountryInfo component", () => {
//     render(<CountryInfo />);

//     screen.debug();
//   });
// });