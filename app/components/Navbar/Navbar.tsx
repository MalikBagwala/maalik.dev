const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg backdrop-saturate-150 border-gray-200 border-b">
      <div className="container py-4">
        <div className="flex flex-shrink-0 gap-2 items-center font-semibold">
          <img src="/logo.webp" height={30} width={30} alt="Logo" />
          <h1>maalik.dev</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
