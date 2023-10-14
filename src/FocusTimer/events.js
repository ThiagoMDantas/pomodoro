import { Controls } from './elements.js'
import * as Actions from './actions.js'

export function registerControls() {
  Controls.addEventListener('click', (event) => {
    const func = event.target.dataset.action

    if(typeof Actions[func] != 'function'){
      return
    }

    Actions[func]()

  })
}