import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Activities.css";
import Titile from "../../Shared/Ttitle/Titile";
const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const Activities = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="mt-44 ">
      <Titile
        heading={"  Gallary"}
        subHeading={" Wellcome to book buddies"}
      ></Titile>

      <div className="bg-sky-50 rounded-full">
        <div>
          <div className="hero max-w-7xl mx-auto    ">
            <div className="hero-content flex-col gap-8 justify-between  lg:flex-row-reverse">
              <div className="text-left   mx-10">
                <h1 className="text-5xl font-bold">
                  {" "}
                  Our Student <span className="text-green-500">
                    Activities
                  </span>{" "}
                  !
                </h1>
                <p className="py-6 text-justify ">
                  Provident cupiditate voluptatem et in. <br /> Quaerat fugiat
                  ut assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="bg-orange-500 text-white p-1 rounded-xl btn-outline font-sans">
                  {" "}
                  Explore Classes{" "}
                </button>
              </div>
              <div className="card flex-shrink-0   w-full  md:max-w-xl sm:max-w-sm  ">
                <div className="wrapper   ">
                  <div className="scene">
                    <div className="carousel keen-slider  " ref={sliderRef}>
                      <div className="rounded-2xl carousel__cell number-slide1 w-[600px] h-[300px] mx-auto  bg-[url('https://i.ibb.co/mGYmJx5/pngwing-com-13.png')] bg-cover ">
                        <h1 className=""> </h1>
                      </div>
                      <div className="bg-cover bg-[url('https://i.ibb.co/FgvG4gZ/pngwing-com-3.png')] carousel__cell number-slide2 w-[600px] h-[300px] mx-auto rounded-2xl"></div>
                      <div className="bg-[url('https://i.ibb.co/CHs83Yj/pngwing-com-10.png')] carousel__cell number-slide3 w-[600px] h-[300px] mx-auto rounded-2xl bg-cover"></div>
                      <div className="bg-[url('https://i.ibb.co/nn0MVQG/pngwing-com-11.png')] bg-cover carousel__cell number-slide4 w-[600px] h-[300px] mx-auto  rounded-2xl"></div>
                      <div className=" bg-[url('https://i.ibb.co/GsvVhtm/cloudx2.png')] carousel__cell number-slide5 w-[600px] h-[300px] mx-auto  bg-cover  rounded-2xl"></div>
                      <div className="bg-[url('https://i.ibb.co/3NQBMXs/pngwing-com-12.png')] carousel__cell number-slide3 w-[600px] h-[300px] mx-auto rounded-2xl bg-cover"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
