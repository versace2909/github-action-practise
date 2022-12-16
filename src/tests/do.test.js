import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { QueryClient, QueryClientProvider } from "react-query";
import "@testing-library/jest-dom";

test("render react link", () => {
  const client = new QueryClient();

  render(
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  );
  const h1Element = screen.getByText("Star Wars Info - Re-deployment");
  expect(h1Element).toBeInTheDocument();
});
