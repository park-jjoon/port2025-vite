

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 내보내기
export function port(){
    gsap.registerPlugin(ScrollTrigger);

    const horSection = gsap.utils.toArray('.port__item');

    gsap.to(horSection, {
        xPercent: -120 * (horSection.length),
        ease: "none",
        scrollTrigger: {
            trigger: "#port",
            start:"top 100px",
            end: "+=2500",
            pin: true,
            markers: true,
            scrub: 1,
            aniticipatePin: 1
        }
    });

}