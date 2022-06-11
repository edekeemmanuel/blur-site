const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

const opaScale = (num, in_min, in_max, out_min, out_max) => {
    return (num-in_min) * (out_max - out_min)/(in_max-in_min) + out_min
}

let loads = 0;

let inits = setInterval(blurs, 100);

function blurs() {
    loads++

    if (loads==100) {
        clearInterval(inits);
    }
    
    loadText.innerText = `${loads}% ebakecode`
    loadText.style.opacity = opaScale(loads, 0, 100, 1, 0)
    bg.style.filter = `blur(${opaScale(loads, 0, 100, 50, 0)}px)`
    // console.log(l)

}