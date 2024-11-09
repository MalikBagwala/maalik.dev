import { Outlet } from "@remix-run/react";

export default function ProjectDetail() {
  // const navigate = useNavigate();
  return (
    <>
      <Outlet />
      {/* <SpringModal
        isOpen={true}
        onClose={() => navigate("/", { preventScrollReset: true })}
      /> */}
    </>
  );
}
