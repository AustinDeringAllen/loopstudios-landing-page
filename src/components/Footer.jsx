const NAV_LINKS = ["About", "Careers", "Events", "Products", "Support"];

const SOCIAL_LINKS = [
  { title: "Facebook", image: "/images/icon-facebook" },
  { title: "Twitter", image: "/images/icon-twitter" },
  { title: "Pinterest", image: "/images/icon-pinterest" },
  { title: "Instagram", image: "/images/icon-instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white text-[15px] text-center p-12 space-y-12 flex flex-col lg:flex-row lg:justify-between lg:px-28 lg:items-center lg:space-y-0">
      <div className="space-y-6">
        <img
          src="/images/logo.svg"
          alt="loopstudios"
          className="w-36 mx-auto lg:mx-0"
        />
        <nav>
          <ul className="flex flex-col items-center gap-6 lg:flex-row">
            {NAV_LINKS.map((item, i) => {
              return (
                <li
                  key={i}
                  className="cursor-pointer relative after:hidden after:absolute after:-bottom-1.5 after:inset-x-0 flex after:border-b-2 after:w-2/5 after:mx-auto after:mt-1.5 hover:after:block"
                >
                  <a className="cursor-pointer">{item}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="space-y-6">
        <div>
          <ul className="flex justify-center items-center gap-4 lg:justify-end">
            {SOCIAL_LINKS.map((item, i) => {
              return (
                <li
                  key={i}
                  className="cursor-pointer relative after:hidden after:absolute after:-bottom-1.5 after:inset-x-0 flex after:border-b-2 after:w-full after:mx-auto after:mt-1.5 hover:after:block"
                >
                  <a>
                    <img src={`${item.image}.svg`} alt={item.title} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <p className=" text-very-dark-gray">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
