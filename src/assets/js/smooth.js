
import Lenis from "@studio-freight/lenis";



// 내보내기
export function smooth(){
    
    const lenis = new Lenis({
        duration:1,
        
    })

    lenis.on('scroll', (e) => {
        console.log(e);
    });

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    
}