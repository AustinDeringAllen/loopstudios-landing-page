const GRID_ITEMS = [
  {
    title: "Deep Earth",
    mImage: "/images/mobile/image-deep-earth",
    dImage: "/images/desktop/image-deep-earth",
    altText: "Earth In Space",
  },
  {
    title: "Night Arcade",
    mImage: "/images/mobile/image-night-arcade",
    dImage: "/images/desktop/image-night-arcade",
    altText: "Skee-ball arcade machine",
  },
  {
    title: "Soccer Team VR",
    mImage: "/images/mobile/image-soccer-team",
    dImage: "/images/desktop/image-soccer-team",
    altText: "Soccer Player",
  },
  {
    title: `The Grid`,
    mImage: "/images/mobile/image-grid",
    dImage: "/images/desktop/image-grid",
    altText: "Race Car",
  },
  {
    title: "From Up Above VR",
    mImage: "/images/mobile/image-from-above",
    dImage: "/images/desktop/image-from-above",
    altText: "Curvey Road From Above",
  },
  {
    title: "Pocket Borealis",
    mImage: "/images/mobile/image-pocket-borealis",
    dImage: "/images/desktop/image-pocket-borealis",
    altText: "Aurora Borealis",
  },
  {
    title: "The Curiosity",
    mImage: "/images/mobile/image-curiosity",
    dImage: "/images/desktop/image-curiosity",
    altText: "Mars Rover",
  },
  {
    title: "Make It Fisheye",
    mImage: "/images/mobile/image-fisheye",
    dImage: "/images/desktop/image-fisheye",
    altText: "Fish Eye Lens Image",
  },
];

const ImageGrid = () => {
  return (
    <section className="text-center mb-24 lg:mx-20 lg:text-start">
      <div className="flex justify-center lg:justify-between items-center">
        <h3 className="uppercase text-3xl font-josefin font-light">
          Our Creations
        </h3>
        <button className="hidden cursor-pointer lg:block uppercase py-2 px-8 tracking-[0.3em] border border-black hover:bg-black hover:text-white">
          see all
        </button>
      </div>
      <div className="grid place-items-center my-12 gap-6 lg:grid-cols-4 lg:grid-rows-2 lg:gap-6 px-6 lg:px-0">
        {GRID_ITEMS.map((item, i) => (
          <GridItem
            key={i}
            title={item.title}
            mImage={item.mImage}
            dImage={item.dImage}
            altText={item.altText}
          />
        ))}
      </div>
      <button className="uppercase py-2 px-8 tracking-[0.3em] border border-black lg:hidden">
        see all
      </button>
    </section>
  );
};

const GridItem = ({ title, mImage, dImage, altText }) => {
  return (
    <div className="cursor-pointer relative text-white text-start font-josefin font-light group hover:text-black">
      <div className="absolute h-full w-1/2 bg-gradient-to-r from-black/70 to-transparent lg:bg-gradient-to-t lg:w-full group-hover:from-white/75 group-hover:to-white/75"></div>
      <h4 className="absolute left-0 bottom-0 w-1/2 p-5 uppercase text-2xl leading-6 lg:w-10/12 group-hover:opacity-100">
        {title}
      </h4>
      <img src={`${mImage}.jpg`} alt={altText} className="lg:hidden" />
      <img src={`${dImage}.jpg`} alt={altText} className="hidden lg:block" />
    </div>
  );
};

export default ImageGrid;
