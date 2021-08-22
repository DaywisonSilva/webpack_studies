export default function(fn, time) {
    let timer = 0;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(fn, time);
    }
}
