import React from "react";
import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

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
        <section className="w-full p-4">
            <div className="sm:w-3/4 m-auto">
                <h1 className="text-gray-900 text-4xl font-medium text-center">Nossos Clientes</h1>
            </div>
            <div className="navigation-wrapper sm:w-3/4 m-auto my-4">
                <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slider4">
                    <Image width="242px" height="79px" src="/sescap.webp" />
                </div>
                <div className="keen-slider__slide number-slider5">
                    <Image width="226px" height="49px" src="/impacto.webp" />
                </div>
                <div className="keen-slider__slide number-slider6">
                    <Image width="252px" height="89px" src="/barros-filhos.webp" />
                </div>
                <div className="keen-slider__slide number-slider7">
                    <Image width="273px" height="100px" src="/campo-lindo.webp" />
                </div>
                <div className="keen-slider__slide number-slider8">
                    <Image width="261px" height="100px" src="/ricarte.webp" />
                </div>
                <div className="keen-slider__slide number-slider9">
                    <Image width="185px" height="92px" src="/hospital-olhos.webp" />
                </div>
                <div className="keen-slider__slide number-slider10">
                    <Image width="164px" height="78px" src="/giro.webp" />
                </div>
                <div className="keen-slider__slide number-slider11">
                    <Image width="164px" height="109px" src="/jj.webp" />
                </div>
                <div className="keen-slider__slide number-slider12">
                    <Image width="251px" height="91px" src="/cemise.webp" />
                </div>
                <div className="keen-slider__slide number-slider13">
                    <Image width="218px" height="77px" src="/emcs.webp" />
                </div>
                <div className="keen-slider__slide number-slider14">
                    <Image width="174px" height="100px" src="/mb-moto.webp" />
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
        </section>
    );
};