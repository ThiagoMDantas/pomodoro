import state from './state.js'
import * as Timer from './timer.js'

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')
  Timer.countDown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
}

export function set() {
  console.log('Set exec')
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')
}