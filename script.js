let h = '0', m = '0', s = '0', ms = '0';
let timer;

const start = () => {
    if (!timer) {
        timer = setInterval(debut, 10);
    }
}

const debut = () => {
    document.querySelector('.times').innerHTML = getTimer();
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }
}

const getTimer = () => {
    return (h < 10 ? '0' + h : h) + ' : ' + (m < 10 ? '0' + m : m) + ' : ' + (s < 10 ? '0' + s : s) + ' : ' + (ms < 10 ? '0' + ms : ms);
}

const stop = () => {
    StopTimer();
}

const StopTimer = () => {
    clearInterval(timer);
    timer = false;
}

const reset = () => {
    StopTimer();
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    document.querySelector('.times').innerHTML = getTimer();
}

const restart = () => {
    reset();
    start();
}