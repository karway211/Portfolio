let slider = document.getElementById('slider'),
    carousel = document.getElementById('carousel'),
    leftArrow = document.getElementById('left-arrow'),
    rightArrow = document.getElementById('right-arrow');

let slide = (items, leftArrow, rightArrow) => {
    let x1 = 0,
        x2 = 0,
        start,
        finish,
        moveMouse = 50,
        slides = items.getElementsByClassName('slide'),
        slidesLength = slides.length,
        slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
        firstSlide = slides[0],
        lastSlide = slides[slidesLength - 1],
        cloneFirstSlide = firstSlide.cloneNode(true),
        cloneLastSlide = lastSlide.cloneNode(true),
        allowChange = true;
        index = 0,
  
    items.appendChild(cloneFirstSlide);
    items.insertBefore(cloneLastSlide, firstSlide);
    
    let dragStart = (e) => {
        e.preventDefault();
        start = items.offsetLeft;
        if (e.type == 'touchstart') {
            x1 = e.touches[0].clientX;
        } else {
            x1 = e.clientX;
            document.onmouseup = dragFinish;
            document.onmousemove = dragAction;
        }
    }
    
    items.onmousedown = dragStart; 
    items.addEventListener('touchstart', dragStart);
    let dragAction = (e) => {
        if (e.type == 'touchmove') {
            x2 = x1 - e.touches[0].clientX;
            x1 = e.touches[0].clientX;
        } else {
            x2 = x1 - e.clientX;
            x1 = e.clientX;
        }
        items.style.left = (items.offsetLeft - x2) + "px";
    }

    items.addEventListener('touchmove', dragAction);
    
    let changeSlides = (dir, action) => {
        items.classList.add('changing');
        if (allowChange) {
            if (!action) {
                start = items.offsetLeft; 
            }
            if (dir == 1) {
                items.style.left = (start - slideSize) + "px";
                index++;      
            } else if (dir == -1) {
                items.style.left = (start + slideSize) + "px";
                index--;      
            }
        }       
        allowChange = false;
    }

    leftArrow.addEventListener('click', () => { changeSlides(-1) });
    rightArrow.addEventListener('click', () => { changeSlides(1) });

    let dragFinish = () => {
        finish = items.offsetLeft;
        if (finish - start < -moveMouse) {
            changeSlides(1, 'drag');
        } else if (finish - start > moveMouse) {
            changeSlides(-1, 'drag');
        } else {
            items.style.left = (start) + "px";
        }
        document.onmouseup = null;
        document.onmousemove = null;
    }
  
    items.addEventListener('touchend', dragFinish);
    
    let checkIndex = () => {
        items.classList.remove('changing');
        if (index == -1) {
        items.style.left = -(slidesLength * slideSize) + "px";
        index = slidesLength - 1;
        }
        if (index == slidesLength) {
        items.style.left = -(1 * slideSize) + "px";
        index = 0;
        }      
        allowChange = true;
    }

    items.addEventListener('transitionend', checkIndex);
}

slide(carousel, leftArrow, rightArrow);


  
