"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import PropTypes from "prop-types";
import "./Carousel.scss";
import Image from "next/image";
import rider from "@/assets/rider.svg";

// const isEqual = require("react-fast-compare");

export default function Carousel(props) {
  const [slideTotal, setSlideTotal] = useState(0);
  const [slideCurrent, setSlideCurrent] = useState(-1);
  const [slides, setSlides] = useState([
    {
      class: "slider-single proactivede",
      element: (
        <>
          <div className="w-full shadow-xl px-5 md:px-10 flex flex-col md:grid grid-cols-[1fr_2fr] gap-5 md:gap-7 items-center py-10 rounded-3xl bg-white">
            <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
              <Image src={rider} alt="" className="" />
            </figure>
            <div className="w-full flex flex-col gap-3 md:gap-5">
              <b className="text-primary text-2xl md:text-3xl">Bike Rental</b>
              <p className="text-sm md:text-lg">
                Satisfy your cravings and indulge in a delightful culinary
                journey with our food delivery service. Whether {`it's`} a quick
                bite or a sumptuous feast, we bring a world of flavors right to
                your doorstep. From the coziest cafes to the finest dining
                establishments, our platform offers an extensive selection of
                cuisines to tantalize your taste buds. With just a few taps, you
                can explore menus, choose your favorites, and place an order
                effortlessly. Sit back, relax, and let us handle the rest—timely
                deliveries, careful handling, and a commitment to food{" "}
                {`that's`} as fresh and flavorful as dining in person.
                Experience the convenience of enjoying your favorite meals at
                home, courtesy of our seamless food delivery service.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      class: "slider-single proactive",
      element: (
        <>
          <div className="w-full shadow-xl px-5 md:px-10 flex flex-col md:grid grid-cols-[1fr_2fr] gap-5 md:gap-7 items-center py-10 rounded-3xl bg-white">
            <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
              <Image src={rider} alt="" className="" />
            </figure>
            <div className="w-full flex flex-col gap-3 md:gap-5">
              <b className="text-primary text-2xl md:text-3xl">Bike Rental</b>
              <p className="text-sm md:text-lg">
                Satisfy your cravings and indulge in a delightful culinary
                journey with our food delivery service. Whether {`it's`} a quick
                bite or a sumptuous feast, we bring a world of flavors right to
                your doorstep. From the coziest cafes to the finest dining
                establishments, our platform offers an extensive selection of
                cuisines to tantalize your taste buds. With just a few taps, you
                can explore menus, choose your favorites, and place an order
                effortlessly. Sit back, relax, and let us handle the rest—timely
                deliveries, careful handling, and a commitment to food{" "}
                {`that's`} as fresh and flavorful as dining in person.
                Experience the convenience of enjoying your favorite meals at
                home, courtesy of our seamless food delivery service.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      class: "slider-single preactivede",
      element: (
        <>
          <div className="w-full shadow-xl px-5 md:px-10 flex flex-col md:grid grid-cols-[1fr_2fr] gap-5 md:gap-7 items-center py-10 rounded-3xl bg-white">
            <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
              <Image src={rider} alt="" className="" />
            </figure>
            <div className="w-full flex flex-col gap-3 md:gap-5">
              <b className="text-primary text-2xl md:text-3xl">Bike Rental</b>
              <p className="text-sm md:text-lg">
                Satisfy your cravings and indulge in a delightful culinary
                journey with our food delivery service. Whether {`it's`} a quick
                bite or a sumptuous feast, we bring a world of flavors right to
                your doorstep. From the coziest cafes to the finest dining
                establishments, our platform offers an extensive selection of
                cuisines to tantalize your taste buds. With just a few taps, you
                can explore menus, choose your favorites, and place an order
                effortlessly. Sit back, relax, and let us handle the rest—timely
                deliveries, careful handling, and a commitment to food{" "}
                {`that's`} as fresh and flavorful as dining in person.
                Experience the convenience of enjoying your favorite meals at
                home, courtesy of our seamless food delivery service.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      class: "slider-single preactivede",
      element: (
        <>
          <div className="w-full shadow-xl px-5 md:px-10 flex flex-col md:grid grid-cols-[1fr_2fr] gap-5 md:gap-7 items-center py-10 rounded-3xl bg-white">
            <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
              <Image src={rider} alt="" className="" />
            </figure>
            <div className="w-full flex flex-col gap-3 md:gap-5">
              <b className="text-primary text-2xl md:text-3xl">Bike Rental</b>
              <p className="text-sm md:text-lg">
                Satisfy your cravings and indulge in a delightful culinary
                journey with our food delivery service. Whether {`it's`} a quick
                bite or a sumptuous feast, we bring a world of flavors right to
                your doorstep. From the coziest cafes to the finest dining
                establishments, our platform offers an extensive selection of
                cuisines to tantalize your taste buds. With just a few taps, you
                can explore menus, choose your favorites, and place an order
                effortlessly. Sit back, relax, and let us handle the rest—timely
                deliveries, careful handling, and a commitment to food{" "}
                {`that's`} as fresh and flavorful as dining in person.
                Experience the convenience of enjoying your favorite meals at
                home, courtesy of our seamless food delivery service.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      class: "slider-single preactivede",
      element: (
        <>
          <div className="w-full shadow-xl px-5 md:px-10 flex flex-col md:grid grid-cols-[1fr_2fr] gap-5 md:gap-7 items-center py-10 rounded-3xl bg-white">
            <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
              <Image src={rider} alt="" className="" />
            </figure>
            <div className="w-full flex flex-col gap-3 md:gap-5">
              <b className="text-primary text-2xl md:text-3xl">Bike Rental</b>
              <p className="text-sm md:text-lg">
                Satisfy your cravings and indulge in a delightful culinary
                journey with our food delivery service. Whether {`it's`} a quick
                bite or a sumptuous feast, we bring a world of flavors right to
                your doorstep. From the coziest cafes to the finest dining
                establishments, our platform offers an extensive selection of
                cuisines to tantalize your taste buds. With just a few taps, you
                can explore menus, choose your favorites, and place an order
                effortlessly. Sit back, relax, and let us handle the rest—timely
                deliveries, careful handling, and a commitment to food{" "}
                {`that's`} as fresh and flavorful as dining in person.
                Experience the convenience of enjoying your favorite meals at
                home, courtesy of our seamless food delivery service.
              </p>
            </div>
          </div>
        </>
      ),
    },
  ]);
  const [height, setHeight] = useState("0px");
  const intervalRef = useRef(null);
  const nextRef = useRef();
  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  useEffect(() => {
    const locSlides = [];
    slides.forEach((slide) => {
      const slideobject = {
        class: "slider-single proactivede",
        element: slide,
      };
      locSlides.push(slideobject);
    });
    if (slides.length === 2) {
      slides.forEach((slide) => {
        const slideobject = {
          class: "slider-single proactivede",
          element: slide,
        };
        locSlides.push(slideobject);
      });
    }
    setSlides(locSlides);
    setSlideTotal(locSlides.length - 1);
    setSlideCurrent(-1);
    if (slideCurrent === -1) {
      setTimeout(() => {
        nextRef.current.click();
        if (props.autoplay) {
          intervalRef.current = setTimeout(() => {
            nextRef.current.click();
          }, props.interval);
        }
      }, 500);
    }
  }, [slides, props.interval, props.autoplay, slideCurrent]);
  useEffect(() => {
    if (slideCurrent === -1) {
      setTimeout(() => {
        //slideRight();
      }, 500);
    }
  }, [slides, slideCurrent]);

  const slideRight = () => {
    let preactiveSlide;
    let proactiveSlide;
    let slideCurrentLoc = slideCurrent;

    const activeClass = "slider-single active";
    const slide = [...slides];
    if (slideTotal > 1) {
      if (slideCurrentLoc < slideTotal) {
        slideCurrentLoc++;
      } else {
        slideCurrentLoc = 0;
      }
      if (slideCurrentLoc > 0) {
        preactiveSlide = slide[slideCurrentLoc - 1];
      } else {
        preactiveSlide = slide[slideTotal];
      }
      const activeSlide = slide[slideCurrentLoc];
      if (slideCurrentLoc < slideTotal) {
        proactiveSlide = slide[slideCurrentLoc + 1];
      } else {
        proactiveSlide = slide[0];
      }

      slide.forEach((slid, index) => {
        if (slid.class.includes("preactivede")) {
          slid.class = "slider-single proactivede";
        }
        if (slid.class.includes("preactive")) {
          slid.class = "slider-single preactivede";
        }
      });

      preactiveSlide.class = "slider-single preactive";
      activeSlide.class = activeClass;
      proactiveSlide.class = "slider-single proactive";
      setSlides(slide);
      setSlideCurrent(slideCurrentLoc);

      if (document.getElementsByClassName("slider-single active").length > 0) {
        setTimeout(() => {
          if (
            document.getElementsByClassName("slider-single active").length > 0
          ) {
            const height = document.getElementsByClassName(
              "slider-single active"
            )[0].clientHeight;
            setHeight(`${height}px`);
          }
        }, 500);
      }
      props.onSlideChange(slideCurrentLoc);
      if (props.autoplay) {
        clearTimeout(intervalRef.current);
        intervalRef.current = setTimeout(() => {
          nextRef.current.click();
        }, props.interval);
      }
    } else if (slide[0] && slide[0].class !== activeClass) {
      slide[0].class = activeClass;
      setSlides(slide);
      setSlideCurrent(0);
    }
  };
  const slideLeft = () => {
    if (slideTotal > 1) {
      let preactiveSlide;
      let proactiveSlide;
      let slideCurrentLoc = slideCurrent;
      const slide = [...slides];
      if (slideCurrentLoc > 0) {
        slideCurrentLoc--;
      } else {
        slideCurrentLoc = slideTotal;
      }

      if (slideCurrentLoc < slideTotal) {
        proactiveSlide = slide[slideCurrentLoc + 1];
      } else {
        proactiveSlide = slide[0];
      }
      let activeSlide = slide[slideCurrentLoc];
      if (slideCurrentLoc > 0) {
        preactiveSlide = slide[slideCurrentLoc - 1];
      } else {
        preactiveSlide = slide[slideTotal];
      }
      slide.forEach((slid, index) => {
        if (slid.class.includes("proactivede")) {
          slid.class = "slider-single preactivede";
        }
        if (slid.class.includes("proactive")) {
          slid.class = "slider-single proactivede";
        }
      });
      preactiveSlide.class = "slider-single preactive";
      activeSlide.class = "slider-single active";
      proactiveSlide.class = "slider-single proactive";
      setSlides(slide);
      setSlideCurrent(slideCurrentLoc);
      props.onSlideChange(slideCurrentLoc);
      if (document.getElementsByClassName("slider-single active").length > 0) {
        setTimeout(() => {
          if (
            document.getElementsByClassName("slider-single active").length > 0
          ) {
            const height = document.getElementsByClassName(
              "slider-single active"
            )[0].clientHeight;
            setHeight(`${height}px`);
          }
        }, 500);
      }
    }
  };

  const sliderClass = (direction) => {
    let sliderClass = `slider-${direction}`;
    if (!props.arrows) {
      sliderClass = "slider-disabled";
    } else if (props.arrows && !props.arrowBorders) {
      sliderClass = `slider-${direction}-noborders`;
    }
    return sliderClass;
  };

  return (
    <div className="react-3d-carousel" style={{ height }} {...handlers}>
      {slides && slides.length > 0 && (
        <div className="slider-container">
          <div className="slider-content">
            {slides.map((slider, index) => (
              <div className={slider.class} key={index}>
                <div className={sliderClass("left")} onClick={slideLeft}>
                  <div>
                    <i className="fa fa-arrow-left"></i>
                  </div>
                </div>
                <div
                  className={sliderClass("right")}
                  onClick={slideRight}
                  ref={nextRef}
                >
                  <div>
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
                <div className="slider-single-content">{slider.element}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
Carousel.propTypes = {
  autoplay: PropTypes.bool,
  interval: PropTypes.number,
  arrows: PropTypes.bool,
  arrowBorders: PropTypes.bool,
  onSlideChange: PropTypes.func,
};
Carousel.defaultProps = {
  autoplay: true,
  interval: 3000,
  arrows: true,
  arrowBorders: true,
  onSlideChange: function () {},
};
