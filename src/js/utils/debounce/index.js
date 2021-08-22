export default function(fn, time) {
    let timer = 0;
    const name = "idnf"
    name = "fndin"
    return function() {
        clearTimeout(timer);
        timer = setTimeout(fn, time);
    }
}