let toastTimer
let toastFadeOutTimer
const toast = (msg) => {
  console.log(msg, '我打印出来了 msg')
  const ele = document.getElementById('toast')
  console.log(ele, 'ele')
  ele.childNodes[0].innerText = msg
  ele.style.display = 'block'
  clearTimeout(toastTimer)
  clearTimeout(toastFadeOutTimer)
  setTimeout(() => {
    ele.style.opacity = .8
    ele.style.bottom = '10rem'
  }, 1)
  toastTimer = setTimeout(() => {
    console.log('toastTimer')
    ele.style.display = 'none'
    ele.childNodes[0].innerText = ''
  }, 1900)
  toastFadeOutTimer = setTimeout(() => {
    console.log('toastFadeOutTimer')
    ele.style.opacity = 0
    ele.style.bottom = '11rem'
  }, 1700)
}
export default {
  toast
}