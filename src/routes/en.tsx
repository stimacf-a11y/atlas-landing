import { createFileRoute } from "@tanstack/react-router";
import { localeHead } from "@/lib/i18n-seo";
import { HomePage } from "@/routes/index";

export const Route = createFileRoute("/en")({
  head: () => localeHead("en"),
  component: HomePage,
});
