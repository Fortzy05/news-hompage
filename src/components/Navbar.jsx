import ImageLogo from "../assets/logo.svg"

function Navbar() {
  return (
    <header className="flex justify-between items-center p-5">
      <div className="">
        <img className="w-12" src={ImageLogo} alt="logo" />
        </div>
        <nav className="flex space-x-5 gap-2 cursor-pointer">
          <p className=" hover:text-red-500 ">Home</p>
          <p className=" hover:text-red-500">New</p>
          <p className=" hover:text-red-500">Popular</p>
          <p className=" hover:text-red-500">Trending</p>
          <p className=" hover:text-red-500">Categories</p>
        </nav>
      
    </header>
  );
}

export default Navbar;
