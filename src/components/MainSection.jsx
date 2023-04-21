const MainSection = () => {
  return (
    <section className="relative my-20 mx-20 flex flex-col lg:flex-row max-w-screen-md">
      <div className="lg:w-9/12">
        {/* lg:w-4/5 lg:px-20 */}
        <img
          src="/loopstudios-landing-page/images/mobile/image-interactive.jpg"
          alt="Man having an interactive experience"
          className="md:hidden"
        />
        <img
          src="/loopstudios-landing-page/images/desktop/image-interactive.jpg"
          alt="Man having an interactive experience"
          className="hidden md:block"
        />
      </div>
      <div className="text-center px-10 my-12 space-y-4 md:px-28 lg:text-start lg:m-0 lg:mr-0 lg:absolute bottom-0 -right-48 lg:w-8/12 lg:pl-12 lg:pr-12 lg:bg-white ">
        <h3 className="uppercase text-3xl font-josefin font-light md:text-4xl lg:pt-12">
          the leader in interactive vr
        </h3>
        <p className=" text-dark-gray text-[15px] md:text-base lg:text-[15px]">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default MainSection;
