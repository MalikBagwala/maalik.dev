import { Outlet, useNavigate } from "@remix-run/react";
import SpringModal from "~/components/ProjectModal/ProjectModal";

export default function ProjectDetail() {
  const navigate = useNavigate();
  return (
    <>
      <Outlet />
      <SpringModal
        isOpen={true}
        onClose={() => navigate("/", { preventScrollReset: false })}
      />
    </>
  );
}
