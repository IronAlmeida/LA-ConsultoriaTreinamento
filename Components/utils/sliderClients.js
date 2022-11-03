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
                <h1 className="text-gray-900 text-4xl font-medium text-center my-2">Nossos Clientes</h1>
            </div>
            <div className="navigation-wrapper sm:w-3/4 m-auto my-6">
                <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slider4">
                    <Image width="242" height="79" src="/sescap.webp" />
                </div>
                <div className="keen-slider__slide number-slider5">
                    <Image width="226" height="49" src="/impacto.webp" />
                </div>
                <div className="keen-slider__slide number-slider6">
                    <Image width="252" height="89" src="/barros-filhos.webp" />
                </div>
                <div className="keen-slider__slide number-slider7">
                    <Image width="273" height="100" src="/campo-lindo.webp" />
                </div>
                <div className="keen-slider__slide number-slider8">
                    <Image width="261" height="100" src="/ricarte.webp" />
                </div>
                <div className="keen-slider__slide number-slider9">
                    <Image width="185" height="92" src="/hospital-olhos.webp" />
                </div>
                <div className="keen-slider__slide number-slider10">
                    <Image width="164" height="78" src="/giro.webp" />
                </div>
                <div className="keen-slider__slide number-slider11">
                    <Image width="164" height="109" src="/jj.webp" />
                </div>
                <div className="keen-slider__slide number-slider12">
                    <Image width="251" height="91" src="/cemise.webp" />
                </div>
                <div className="keen-slider__slide number-slider13">
                    <Image width="218" height="77" src="/emcs.webp" />
                </div>
                <div className="keen-slider__slide number-slider14">
                    <Image width="174" height="100" src="/mb-moto.webp" />
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