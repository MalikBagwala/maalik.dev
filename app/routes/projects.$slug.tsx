import { redirect } from "@remix-run/node";

export function loader({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (slug) {
    return redirect(`/p/${slug}`);
  }
  return redirect(`/`);
}
