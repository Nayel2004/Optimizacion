const images = document.querySelectorAll('.producto-imagen');



let options ={
    //root: null,
    rootMargin: "-10% 0px",
    threshold: 0
}

function handleIntersect(entries){
    console.log(entries);

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
        }

    })

    
}



const observer = new IntersectionObserver 
(handleIntersect, options)

images.forEach(image => {
    observer.observe(image)
    
})






    


