import React from "react";
import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";

export default function SliderMain() {

    const [currentSlide, setCurrentSlide] = React.useState(0)

    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        slideChanged(s) {
        setCurrentSlide(s.details().relativeSlide)
        },
        loop: true,
        duration: 1000,
        dragStart: () => {
        setPause(true)
        },
        dragEnd: () => {
        setPause(false)
        },
    })

    React.useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
        setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
        setPause(false)
        })
    }, [sliderRef])

    React.useEffect(() => {
        timer.current = setInterval(() => {
        if (!pause && slider) {
            slider.next()
        }
        }, 5000)
        return () => {
        clearInterval(timer.current)
        }
    }, [pause, slider])

    return (
        <>        
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                        <Link href="/suporte"><img width="100%" height="100%" className="block xl:hidden" src="la-suporte-800.png" /></Link>
                        <Link href="/suporte"><img width="100%" height="100%" className="hidden xl:hidden 2xl:hidden" src="la-suporte-1000.png" /></Link>
                        <Link href="/suporte"><img width="100%" height="100%" className="hidden xl:block" src="la-suporte-1400.png" /></Link>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <Link href="/bpo"><img width="100%" height="100%" className="block lg:hidden" src="la-BPO-800.png" /></Link>
                        <Link href="/bpo"><img width="100%" height="100%" className="hidden lg:block xl:hidden" src="la-BPO-1000.png" /></Link>
                        <Link href="/bpo"><img width="100%" height="100%" className="hidden xl:block" src="la-BPO-1400.png" /></Link>
                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <Link href="/cursos"><img width="100%" height="100%" className="block lg:hidden" src="la-cursos-800.png" /></Link>
                        <Link href="/cursos"><img width="100%" height="100%" className="hidden lg:block xl:hidden" src="la-cursos-1000.png" /></Link>
                        <Link href="/cursos"><img width="100%" height="100%" className="hidden xl:block" src="la-cursos-1400.png" /></Link>
                    </div>
                </div>
                {slider && (
                <>
                    <ArrowLeft
                    onClick={(e) => e.stopPropagation() || slider.prev()}
                    disabled={currentSlide === 0}
                    />
                    <ArrowRight
                    onClick={(e) => e.stopPropagation() || slider.next()}
                    disabled={currentSlide === slider.details().size - 1}
                    />
                </>
                )}
            </div>
            
            {slider && (
            <div className="dots bg-slate-400">
                {[...Array(slider.details().size).keys()].map((idx) => {
                    return (
                    <button
                        key={idx}
                        onClick={() => {
                        slider.moveToSlideRelative(idx)
                        }}
                        className={"dot" + (currentSlide === idx ? " active" : "")}
                    />
                    )
                })}
            </div>
            )}
            
        </>
    );
};

function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--left" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    )
  }
  
  function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--right" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    )
  }