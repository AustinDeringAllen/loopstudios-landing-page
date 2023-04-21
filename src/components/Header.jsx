import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="relative">
      <div className="absolute inset-x-6 inset-y-10 text-white md:inset-x-12 lg:inset-x-28">
        <Navbar />
        <div className="mt-40 border-2 p-4 md:mt-10 md:w-1/2 lg:mt-20 lg:w-7/12">
          <h2 className="uppercase text-4xl font-josefin font-light pr-9 lg:pr-6 lg:text-5xl">
            immersive experiences that deliver
          </h2>
        </div>
      </div>
      <div className="-z-10">
        <img
          src="/loopstudios-landing-page/images/mobile/image-hero.jpg"
          alt="Man having immersive experience"
          className="md:hidden"
        />
        <img
          src="/loopstudios-landing-page/images/desktop/image-hero.jpg"
          alt="Man having immersive experience"
          className="hidden md:block"
        />
      </div>
    </header>
  );
};

export default Header;
