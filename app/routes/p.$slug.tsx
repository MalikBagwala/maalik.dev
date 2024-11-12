import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import SpringModal from "~/components/ProjectModal/ProjectModal";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <>
      <Outlet />
      <SpringModal
        project={state}
        isOpen={true}
        onClose={() => navigate("/", { preventScrollReset: true })}
      />
    </>
  );
}
