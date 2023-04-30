import ImageLogo from "../assets/logo.svg";

function Navbar() {
  return (
    <header className="flex justify-between items-center p-[1.25rem]">
      <div className="">
        <img className="w-12" src={ImageLogo} alt="logo" />
      </div>
      <nav className="hidden space-x-5 gap-2 cursor-pointer">
        <ul className="flex space-x-5">
          <li className=" hover:text-red-500 ">Home</li>
          <li className=" hover:text-red-500">New</li>
          <li className=" hover:text-red-500">Popular</li>
          <li className=" hover:text-red-500">Trending</li>
          <li className=" hover:text-red-500">Categories</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
