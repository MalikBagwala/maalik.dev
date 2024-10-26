const Project = ({ title }: { title: string }) => {
  return (
    <div className="rounded-lg border px-6 py-8 mb-10 last:mb-0 shadow text-gray-700 bg-white">
      <header>
        <h5 className="uppercase text-sm font-medium tracking-wider">
          {title}
        </h5>
      </header>
    </div>
  );
};

export default Project;
