import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/");
}

export default function CatchAll() {
  // This won't render because we redirect in the loader.
  return null;
}
