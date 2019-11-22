let slider = document.getElementById('slider'),
    carousel = document.getElementById('carousel'),
    leftArrow = document.getElementById('left-arrow'),
    rightArrow = document.getElementById('right-arrow'),
    wrap = document.getElementById('projects-wrapper');

let slide = (items, leftArrow, rightArrow) => {
    let x1 = 0,
        x2 = 0,
        start = items.offsetLeft,
        finish,
        moveMouse = 40,
        slides = items.getElementsByClassName('slide'),
        slidesLength = slides.length,
        slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
        firstSlide = slides[0],
        lastSlide = slides[slidesLength - 1],
        cloneFirstSlide = firstSlide.cloneNode(true),
        cloneLastSlide = lastSlide.cloneNode(true),
        allowChange = true;
        index = 0;
        items.appendChild(cloneFirstSlide);
        items.insertBefore(cloneLastSlide, firstSlide);
        const discription = document.querySelectorAll('.slide-elem');
        const buttonShow = document.getElementById('buttonShow');

    window.addEventListener('resize', () => {
        slideSize = items.getElementsByClassName('slide')[0].offsetWidth;
        items.style.left = -slideSize + 'px';
        if(window.innerWidth <= 600) {
            discription.forEach((elem) => {
                elem.style.display = 'none';
            });
        } else {
            discription.forEach((elem) => {
                elem.style.display = 'block';
            });
        }
    });
    
    let dragStart = (e) => {
        start = items.offsetLeft;
        if (e.type == 'touchstart') {
            x1 = e.touches[0].clientX;
        }
    }
    
    items.addEventListener('touchstart', dragStart);

    let dragAction = (e) => {
        if (e.type == 'touchmove') {
            x2 = x1 - e.touches[0].clientX;
            x1 = e.touches[0].clientX;
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
        }
    };
  
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
    };

    items.addEventListener('transitionend', checkIndex);
    buttonShow.onclick = (e) => {
        if (e.target.value === 'show discription') {
            e.target.value = 'out discription';
            discription.forEach((elem) => {
                elem.style.display = 'block';
            });
        } else {
            e.target.value = 'show discription';
            discription.forEach((elem) => {
                elem.style.display = 'none';
            });
        }
    }
}

slide(carousel, leftArrow, rightArrow);

const menuElem = document.getElementById('edukation');
const titleElem = menuElem.querySelector('.edukation__click');

titleElem.onclick = () => {
menuElem.classList.toggle('open');
};










