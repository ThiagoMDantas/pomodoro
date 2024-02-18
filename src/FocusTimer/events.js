import { Controls } from './elements.js'
import * as Actions from './actions.js'
import * as el from './elements.js'
import state from './state.js'
import { updateDisplay } from './timer.js'

export function registerControls() {
  Controls.addEventListener('click', (event) => {
    const func = event.target.dataset.action

    if(typeof Actions[func] != 'function'){
      return
    }

    Actions[func]()

  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })
  el.minutes.addEventListener('keypress', (event) => {
    if (isNaN(parseInt(event.key))) {
      event.preventDefault(); // Impede a entrada se a tecla pressionada não for um número
      return;
    }
  
    let time = event.currentTarget.textContent.trim() + event.key; 
    if (time.length > 2) {
      let minutos = event.currentTarget.textContent
      minutos = minutos > 60 ? 60 : minutos
      state.minutes = minutos

      el.seconds.setAttribute('contenteditable', true);
      el.seconds.textContent = ""
      el.seconds.focus();
    }
  })
  
  el.seconds.addEventListener('blur', (event) => {
    let segundos = event.currentTarget.textContent
    segundos = segundos > 59 ? 59 : segundos

    state.seconds = segundos
    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
    el.seconds.removeAttribute('contenteditable')
  })
}