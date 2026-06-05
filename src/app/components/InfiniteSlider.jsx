const logos = [
  { id: 1, src: '/assets/logocarousel/AIB.png', alt: 'AIB' },
  { id: 2, src: '/assets/logocarousel/CERTIFIED.png', alt: 'CERTIFIED' },
  { id: 3, src: '/assets/logocarousel/HACCP.png', alt: 'HACCP' },
  { id: 4, src: '/assets/logocarousel/ISO.png', alt: 'ISO' },
  { id: 5, src: '/assets/logocarousel/ISO9001.png', alt: 'ISO9001' },
  { id: 6, src: '/assets/logocarousel/ISO22000.png', alt: 'ISO22000' },
  { id: 7, src: '/assets/logocarousel/KOSHER.png', alt: 'KOSHER' },
  { id: 8, src: '/assets/logocarousel/LRQA.png', alt: 'LRQA' },
];

const InfiniteSlider = () => {
  return (
    <div className="relative m-auto w-full overflow-hidden bg-inherit">
      <div className="flex w-[200%] animate-infinite-slider gap-[1vw] md:gap-[3vw] lg:gap-[5vw]">
        {logos.concat(logos).map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            <img src={logo.src} alt={logo.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;

  