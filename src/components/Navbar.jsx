import ImageLogo from "../assets/logo.svg"

function Navbar() {
  return (
    <nav className="py-3">
      <div className="flex justify-between items-center">
        <img className="px-5 " src={ImageLogo} alt="logo" />
        <div className="flex space-x-5 gap-2 cursor-pointer px-40">
          <p className=" hover:text-red-500 ">Home</p>
          <p className=" hover:text-red-500">New</p>
          <p className=" hover:text-red-500">Popular</p>
          <p className=" hover:text-red-500">Trending</p>
          <p className=" hover:text-red-500">Categories</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
