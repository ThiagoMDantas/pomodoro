import state from './state.js'
import * as Timer from './timer.js'
import * as Element from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')
  Timer.countDown()
  sounds.ButtonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  Timer.updateDisplay()
  sounds.ButtonPressAudio.play()
}

export function set() {
  Element.minutes.setAttribute('contenteditable', true)
  Element.minutes.focus()
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')

  if(state.isMute) {
    sounds.bgAudio.play()
    return
  } 

  sounds.bgAudio.pause()
}