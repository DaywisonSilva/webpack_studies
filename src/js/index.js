import { debounce } from './utils'

let myFn = debounce(() => {
  console.log('olá')
}, 500)


window.addEventListener('resize', myFn)
