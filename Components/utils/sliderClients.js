import React from "react";
import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function SliderClients() {

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
      slideChanged(s) {
        setCurrentSlide(s.details().relativeSlide)
      },
      duration: 1000,
      slidesPerView: 3,
      mode: "free-snap",
      spacing: 15,
      loop: true,
      dragStart: () => {
        setPause(true)
        },
        dragEnd: () => {
        setPause(false)
        },
    })

    React.useEffect(() => {
        timer.current = setInterval(() => {
        if (!pause && slider) {
            slider.next()
        }
        }, 2000)
        return () => {
        clearInterval(timer.current)
        }
    }, [pause, slider])

    return (
        <>
            <div className="sm:w-3/4 m-auto mt-10 p-2">
                <h1 className="text-gray-900 text-4xl font-medium text-center">Nossos Clientes</h1>
            </div>
            <div className="navigation-wrapper sm:w-3/4 m-auto p-2">
                <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slider4">
                    <img src="sescap.png" />
                </div>
                <div className="keen-slider__slide number-slider5">
                    <img src="impacto.png" />
                </div>
                <div className="keen-slider__slide number-slider6">
                    <img src="barros-filhos.png" />
                </div>
                <div className="keen-slider__slide number-slider7">
                    <img src="campo-lindo.png" />
                </div>
                <div className="keen-slider__slide number-slider8">
                    <img src="ricarte.png" />
                </div>
                <div className="keen-slider__slide number-slider9">
                    <img src="hospital-olhos.png" />
                </div>
                <div className="keen-slider__slide number-slider10">
                    <img src="giro.png" />
                </div>
                <div className="keen-slider__slide number-slider11">
                    <img src="jj.png" />
                </div>
                <div className="keen-slider__slide number-slider12">
                    <img src="cemise.png" />
                </div>
                <div className="keen-slider__slide number-slider13">
                    <img src="emcs.png" />
                </div>
                <div className="keen-slider__slide number-slider14">
                    <img src="mb-moto.png" />
                </div>
                </div>
             </div>       
            {slider && (
                <div className="dots mt-2">
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