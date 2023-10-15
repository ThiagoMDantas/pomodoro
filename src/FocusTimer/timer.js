import state from "./state.js"
import * as Element from './elements.js'

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  Element.minutes.textContent = String(minutes).padStart(2, "0")
  Element.seconds.textContent = String(seconds).padStart(2, "0")
}


export function countDown() {
  if(!state.isRunning) {
    return
  }
  setTimeout( () => {}, 1000)
}