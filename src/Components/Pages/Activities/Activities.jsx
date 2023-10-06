import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Activities.css";
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
    <div>
      <div className="wrapper container mx-auto mt-14">
        <div className="scene">
          <div className="carousel keen-slider  " ref={sliderRef}>
            <div className="rounded-2xl carousel__cell number-slide1 w-[600px] h-[300px] mx-auto  bg-[url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80')] bg-cover ">
              <h1 className=""> 1</h1>
            </div>
            <div className=" bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqFC_0UvXgKERaDYkOmBQG6Jc_PCM59s_KdIxzdHRXkb1L6oih82eauHCCbf4OE0jutM&usqp=CAU')] carousel__cell number-slide2 w-[600px] h-[300px] mx-auto rounded-2xl">
              2
            </div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcZUI6jA0rDuV1BaQQkE5EuY3Y7nQ0HLMCOCX-CAPBvajKHgNJbscJZAoBwWx2El87W4&usqp=CAU')] carousel__cell number-slide3 w-[600px] h-[300px] mx-auto rounded-2xl">
              3
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1555196301-ace64f260222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80')] bg-cover carousel__cell number-slide4 w-[600px] h-[300px] mx-auto bg-green-500 rounded-2xl">
              4
            </div>
            <div className=" bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJUBeechm1iSuBye9xZd95eCBU3_-fFRAiLb2HPrnTBlNC_joaXguXJjAuLVlsuJngd4&usqp=CAU')] carousel__cell number-slide5 w-[600px] h-[300px] mx-auto bg-blue-500 rounded-2xl">
              5
            </div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcZUI6jA0rDuV1BaQQkE5EuY3Y7nQ0HLMCOCX-CAPBvajKHgNJbscJZAoBwWx2El87W4&usqp=CAU')] carousel__cell number-slide3 w-[600px] h-[300px] mx-auto rounded-2xl">
              6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
