const body = document.getElementsByTagName('body')[0];
const root = document.createElement('div');
root.id = 'root';
body.appendChild(root);

const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
let flagCl = false;

textarea.name = 'text';
textarea.rows = '10';
textarea.cols = '60';
textarea.classList.add('textarea');
root.append(textarea, keyboard);
// let resInp;

function createDiv(nClass, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        const div = document.createElement('div');
        div.classList.add(nClass);
        result.push(div);
    }
    return result;
}

keyboard.append(...createDiv('rows', 5));
const keyboardArr = keyboard.getElementsByClassName('rows');

keyboardArr[0].append(...createDiv('rows__key', 14));
keyboardArr[1].append(...createDiv('rows__key', 15));
keyboardArr[2].append(...createDiv('rows__key', 13));
keyboardArr[3].append(...createDiv('rows__key', 13));
keyboardArr[4].append(...createDiv('rows__key', 9));

const keyboardCol1 = keyboardArr[0].getElementsByClassName('rows__key');
const keyboardCol2 = keyboardArr[1].getElementsByClassName('rows__key');
const keyboardCol3 = keyboardArr[2].getElementsByClassName('rows__key');
const keyboardCol4 = keyboardArr[3].getElementsByClassName('rows__key');
const keyboardCol5 = keyboardArr[4].getElementsByClassName('rows__key');

const keyboardArr1 = [].slice.call(keyboardCol1);
const keyboardArr2 = [].slice.call(keyboardCol2);
const keyboardArr3 = [].slice.call(keyboardCol3);
const keyboardArr4 = [].slice.call(keyboardCol4);
const keyboardArr5 = [].slice.call(keyboardCol5);

// console.log(keyboardArr5);

keyboardArr1[13].style.width = '100px';
keyboardArr2[14].style.width = '45px';
keyboardArr2[0].style.width = '50px';
keyboardArr3[0].style.width = '100px';
keyboardArr3[12].style.width = '85px';
keyboardArr4[0].style.width = '100px';
keyboardArr4[12].style.width = '85px';
keyboardArr5[3].style.width = '330px';


const strLocal = localStorage.getItem('str');
if (strLocal) {
    textarea.value = strLocal;
}
// localStorage.clear();

const textEngl = [
    ['&acute;', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '&#45;', '&#61;', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '&#91;', '&#93;', '&#92;', 'DEL'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '&#58;', '&#39;', 'ENTER'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '&#46;', '&#44;', '&#47;', '&#8593;', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'],
];

const textRus = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '&#45;', '&#61;', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#92;', 'DEL'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '&#46;', '&#8593;', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'],
];

const textEnglBig = [
    ['&#8764;', '&#33;', '&#64;', '&#35;', '&#36;', '&#37;', '&#8743;', '&#38;', '&#42;', '&#40;', '&#41;', '&#95;', '&#43;', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '&#123;', '&#125;', '&#448;', 'DEL'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '&#58;', '&#34;', 'ENTER'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '&#60;', '&#62;', '&#63;', '&#8593;', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'],
];

const textRusBig = [
    ['Ё', '&#33;', '&#34;', '&#8470;', '&#59;', '&#37;', '&#58;', '&#63;', '&#42;', '&#40;', '&#41;', '&#95;', '&#43;', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '&#47;', 'DEL'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '&#44;', '&#8593;', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'],
];

const clNameElem = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['Shift', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'Shift'],
    ['Control', 'MetaLeft', 'Alt', 'Space', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'],
];

const keyName = (key, name) => {
    key.forEach((elem, item) => {
        name.forEach((el, it) => {
            if (item === it) {
                elem.innerHTML = el;
            }
        });
    });
};
const keyClass = (key, name) => {
    key.forEach((elem, item) => {
        name.forEach((el, it) => {
            if (item === it) {
                (elem).classList.add(el);
            }
        });
    });
};
let flagEng = true;
let flagSmall = false;
const keybLangEn = () => {
    keyName(keyboardArr1, textEngl[0]);
    keyName(keyboardArr2, textEngl[1]);
    keyName(keyboardArr3, textEngl[2]);
    keyName(keyboardArr4, textEngl[3]);
    keyName(keyboardArr5, textEngl[4]);
    flagEng = true;
    flagSmall = true;
};

keybLangEn();

const keybLangRu = () => {
    keyName(keyboardArr1, textRus[0]);
    keyName(keyboardArr2, textRus[1]);
    keyName(keyboardArr3, textRus[2]);
    keyName(keyboardArr4, textRus[3]);
    keyName(keyboardArr5, textRus[4]);
    flagEng = false;
    flagSmall = true;
};

const keybLangEnBig = () => {
    keyName(keyboardArr1, textEnglBig[0]);
    keyName(keyboardArr2, textEnglBig[1]);
    keyName(keyboardArr3, textEnglBig[2]);
    keyName(keyboardArr4, textEnglBig[3]);
    keyName(keyboardArr5, textEnglBig[4]);
    flagSmall = false;
    flagEng = true;
};

const keybLangRuBig = () => {
    keyName(keyboardArr1, textRusBig[0]);
    keyName(keyboardArr2, textRusBig[1]);
    keyName(keyboardArr3, textRusBig[2]);
    keyName(keyboardArr4, textRusBig[3]);
    keyName(keyboardArr5, textRusBig[4]);

    flagSmall = false;
    flagEng = false;
};

const chengeLang = () => {
    if (flagEng === true) {
        if (flagCl === false) {
            keybLangRu();
        } else {
            keybLangRuBig();
        }
    } else if (flagEng === false) {
        if (flagCl === false) {
            keybLangEn();
        } else {
            keybLangEnBig();
        }
    }
};

const keyboardArray = [keyboardArr1, keyboardArr2, keyboardArr3, keyboardArr4, keyboardArr5];
// console.log(keyboardArray);

document.addEventListener('keydown', (event) => {
    if ((event.key === 'Alt' && event.ctrlKey === true) || (event.key === 'Control' && event.altKey === true)) {
        chengeLang();
    }
});

keyClass(keyboardArr1, clNameElem[0]);
keyClass(keyboardArr2, clNameElem[1]);
keyClass(keyboardArr3, clNameElem[2]);
keyClass(keyboardArr4, clNameElem[3]);
keyClass(keyboardArr5, clNameElem[4]);

//  CapsLock
const CapsLock = keyboardArray[2][0];

const CapsLockOnOff = () => {
    if (flagEng === true && flagSmall === true) {
        keybLangEnBig();
        CapsLock.style.opacity = 0.5;
        CapsLock.style.borderRadius = '30%';
        flagCl = true;
    } else if (flagEng === false && flagSmall === true) {
        keybLangRuBig();
        CapsLock.style.opacity = 0.5;
        CapsLock.style.borderRadius = '30%';
        flagCl = true;
    } else if (flagEng === true && flagSmall === false) {
        keybLangEn();
        CapsLock.style.opacity = '';
        CapsLock.style.borderRadius = '';
        flagCl = false;
    } else if (flagEng === false && flagSmall === false) {
        keybLangRu();
        CapsLock.style.opacity = '';
        CapsLock.style.borderRadius = '';
        flagCl = false;
    }
};

const chengeEnBig = (e) => {
    if (e.key === 'Shift') {
        if (flagCl === false) {
            if (flagEng === true) {
                keybLangEnBig();
            } else if (flagEng === false) {
                keybLangRuBig();
            }
        } else if (flagCl === true) {
            if (flagEng === true) {
                keybLangEn();
            } else if (flagEng === false) {
                keybLangRu();
            }
        }
    }
};

const chengeEnSmall = (e) => {
    if (e.key === 'Shift') {
        if (flagCl === false) {
            if (flagEng === true && flagSmall === false) {
                keybLangEn();
            } else if (flagEng === false && flagSmall === false) {
                keybLangRu();
            }
        } else if (flagCl === true) {
            if (flagEng === true) {
                keybLangEnBig();
            } else if (flagEng === false) {
                keybLangRuBig();
            }
        }
    }
};
CapsLock.addEventListener('click', CapsLockOnOff);
document.addEventListener('keydown', chengeEnBig);
document.addEventListener('keyup', chengeEnSmall);

// Click

keyboardArray.forEach((elem) => {
    elem.forEach((item) => {
        const clickDiv = () => {
            item.style.opacity = 0.5;
            item.style.borderRadius = '30%';
            if ((item.innerHTML).length < 2) {
                textarea.value += item.innerHTML;
                localStorage.setItem('str', textarea.value);
            }
        };
        item.addEventListener('mousedown', clickDiv);
        const onClickDiv = () => {
            item.style.opacity = '';
            item.style.borderRadius = '';
        };
        item.addEventListener('mouseup', onClickDiv);
    });
});

(keyboardArray[0][13]).addEventListener('mousedown', () => {
    textarea.value = (textarea.value).slice(0, -1);
    localStorage.setItem('str', textarea.value);
});
(keyboardArray[1][0]).addEventListener('mousedown', () => {
    textarea.value += '\u0009';
    localStorage.setItem('str', textarea.value);
});
(keyboardArray[4][3]).addEventListener('mousedown', () => {
    textarea.value += '\u0020';
    localStorage.setItem('str', textarea.value);
});

(keyboardArray[2][12]).addEventListener('mousedown', () => {
    textarea.value += '\r\n';
    localStorage.setItem('str', textarea.value);
});

const shiftDown = () => {
    if (flagCl === false) {
        if (flagEng === true) {
            keybLangEnBig();
        } else if (flagEng === false) {
            keybLangRuBig();
        }
    } else if (flagCl === true) {
        if (flagEng === true) {
            keybLangEn();
        } else if (flagEng === false) {
            keybLangRu();
        }
    }
};
const shiftUp = () => {
    if (flagCl === false) {
        if (flagEng === true && flagSmall === false) {
            keybLangEn();
        } else if (flagEng === false && flagSmall === false) {
            keybLangRu();
        }
    } else if (flagCl === true) {
        if (flagEng === true) {
            keybLangEnBig();
        } else if (flagEng === false) {
            keybLangRuBig();
        }
    }
};

(keyboardArray[3][0]).addEventListener('mousedown', shiftDown);
(keyboardArray[3][0]).addEventListener('mouseup', shiftUp);
(keyboardArray[3][12]).addEventListener('mousedown', shiftDown);
(keyboardArray[3][12]).addEventListener('mouseup', shiftUp);

document.onkeydown = function e(event) { return event.keyCode ? !event.keyCode : event.keyCode; };

document.addEventListener('keydown', (event) => {
    // console.log(event);
    keyboardArray.forEach((elem) => {
        elem.forEach((item) => {
            if (`rows__key ${event.code}` === item.className || `rows__key ${event.key}` === item.className) {
                item.style.opacity = 0.5;
                item.style.borderRadius = '30%';
                if ((item.innerHTML).length < 2) {
                    textarea.value += item.innerHTML;
                    localStorage.setItem('str', textarea.value);
                }
            }
        });
    });
});

document.addEventListener('keyup', (event) => {
    keyboardArray.forEach((elem) => {
        elem.forEach((item) => {
            if ((`rows__key ${event.key}` === item.className && `rows__key ${event.key}` !== (keyboardArray[2][0]).className) || (`rows__key ${event.code}` === item.className && `rows__key ${event.key}` !== (keyboardArray[2][0]).className)) {
                item.style.opacity = '';
                item.style.borderRadius = '';
            }
        });
    });
});

document.addEventListener('keydown', (e) => {
    // console.log(e);
    if (e.key === 'Enter') {
        textarea.value += '\r\n';
        localStorage.setItem('str', textarea.value);
    }
    if (e.key === 'Backspace') {
        textarea.value = (textarea.value).slice(0, -1);
        localStorage.setItem('str', textarea.value);
    }
    if (e.code === 'Space') {
        textarea.value += '\u0020';
        localStorage.setItem('str', textarea.value);
    }
    if (e.key === 'CapsLock') CapsLockOnOff();
    if (e.key === 'Tab') {
        textarea.value += '\u0009';
        localStorage.setItem('str', textarea.value);
    }
});
