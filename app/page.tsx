import { redirect } from "next/navigation";

/**
 * As for now,
 * we will redirect the user to the german locale until we implement a proper i18n integration.
 *
 * TODO:
 * Add i18n integration
 */
export default function AppPage() {
  redirect("/de")
}
