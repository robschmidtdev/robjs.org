import { RobJSApp } from './Rob.js'

const getstarted = new RobJSApp('getstarted')
getstarted.init('getstarted')

getstarted.defineStateVar('count', 0)

const Counter = (id) => {
    return `
      <div id='${id}'> 
        <button type='button' class='btn btn-danger' onclick='getstarted.updateState("count", getstarted.state.count - 1)'>-</button>
        <span class="text-dark">${getstarted.state.count}</span>
        <button type='button' class='btn btn-success' onclick='getstarted.updateState("count", getstarted.state.count + 1)'>+</button>
      </div>
    `
}

getstarted.registerComponent(Counter, 'counter1', ['count'])

const App = () => {
  return `
    <div> 
      ${Counter('counter1')}
    </div>
  `
}

getstarted.initialRender(App) 
