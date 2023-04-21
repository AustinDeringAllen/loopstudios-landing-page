const NAV_LINKS = ["About", "Careers", "Events", "Products", "Support"];

const Navbar = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="w-36">
        <img
          src="/loopstudios-landing-page/images/logo.svg"
          alt="loopstudios"
        />
      </div>
      <div>
        <Mobile />
        <Desktop />
      </div>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="md:hidden">
      <img
        src="/loopstudios-landing-page/images/icon-hamburger.svg"
        alt="Mobile Hamburger Button"
      />
    </div>
  );
};

const Desktop = () => {
  return (
    <nav className="hidden md:block text-[15px]">
      <ul className="flex gap-4">
        {NAV_LINKS.map((link, i) => {
          return (
            <li
              key={i}
              className="cursor-pointer relative after:hidden after:absolute after:-bottom-1.5 after:inset-x-0 flex after:border-b-2 after:w-2/5 after:mx-auto after:mt-1.5 hover:after:block"
            >
              <a>{link}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
