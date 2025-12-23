import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  const navList = ["Store", "Mac", "iPhone", "Support"];
  return (
    <header className="w-full p-5 flex justify-between items-center sm:px-10">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden gap-10">
          {navList.map((nav) => (
            <div
              key={nav}
              className="text-sm cursor-pointer text-apple-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
