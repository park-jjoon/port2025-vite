



// 내보내기
export function link(){
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click',function (e){
            e.preventDefault();
            
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);


            if(targetElement){
                targetElement.scrollIntoView({behavior: 'smooth'});
            }
            console.log(targetElement);
            
        });
    });
    
}