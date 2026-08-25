import { createFileRoute, redirect } from "@tanstack/react-router";

/** Spanish is served at the site root; /es is kept as a permanent alias. */
export const Route = createFileRoute("/es")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
