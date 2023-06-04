import "./Intro.scss"


import Lottie from "lottie-web"
import { useEffect, useRef } from "react"

const Intro = () => {
    const loading = useRef(null)
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container :  loading.current,
            renderer : "svg",
            loop : true,
            autoplay : true,
            animationData : require ("../../Assets/lottie/intro.json")
        });
        return ()=>{
            instance.destroy()
        }
    } , [])
    return (
        <div className="IntroSection">
            <div className="informationIntroSection">
                <div className="informationWrapper">
                    <h2>welcome to our store</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur placeat vel quam et. Totam omnis porro blanditiis voluptatem nihil. Repudiandae.
                    </p>
                </div>
            </div>
            <div className="lottieSection">
                <div className="loottie" ref={loading}></div>
            </div>
        </div>
    )
}

export default Intro
