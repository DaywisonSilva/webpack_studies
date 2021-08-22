import debounce from '../utils/debounce'

let logName = debounce(() => {
    console.log("Daywison")
}, 500)

window.addEventListener('resize', logName)
